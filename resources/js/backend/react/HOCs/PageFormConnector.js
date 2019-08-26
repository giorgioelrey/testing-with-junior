
import React, { Component } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import ErrorsAlert from './../components/ErrorsAlert';


const PageFormConnector = ((WrappedComponent) => {

  return class PagesFormConnector extends Component {

    constructor(props){
      super(props);

      this.state = { isLoading: true, pageFormData: {}, apiErrors: [] };

      this.prepareFormDataForEdit = this.prepareFormDataForEdit.bind(this);
      this.prepareFormDataForSubmission = this.prepareFormDataForSubmission.bind(this);
      this.pageUpdate = this.pageUpdate.bind(this);
      this.updateImageAndReturnUrl = this.updateImageAndReturnUrl.bind(this);

    }

    componentDidMount(){

      console.log('hoc props componentDidMount PageForm Connector', this.props);

      this.setState({ isLoading: false, pageFormData: this.prepareFormDataForEdit(this.props.page) });

    }

    async pageUpdate(pageId, fields){

      //console.log('fields for update', fields)

        //console.log('about to update props', JSON.parse(this.props.page.contents))

        const updatedPageData = await this.prepareFormDataForSubmission(fields, pageId);

      try {

        const {data} = await this.props.updatePage(pageId, updatedPageData);

        console.log('success', data);

        this.props.history.push('/admin/dashboard/pages');

      } catch(error){

        console.log('error submit', error);

        this.props.setSubmissionErrors([error.response.data.message]);

      }

    }

    prepareFormDataForEdit(page) {

      const formStartingValues = {};
      const fieldsData = {};
      const yupValSchema = {};

      const pageContents = JSON.parse(page.contents);
      console.log('pageContents come oggetto', pageContents)

      for (var key in pageContents) {

            const fieldTranslated = pageContents[key]['translated'];
            const isNotImageField = (pageContents[key]['type'] !== 'image');
            //console.log('field', pageContents[key])


            if (isNotImageField){
                var validationMinChars = pageContents[key]['type'] == 'wisiwyg' ? 30 : 6;
            }

            //caso 1. non ha una traduzione
            if (!fieldTranslated){

                formStartingValues[key] =  isNotImageField ? pageContents[key]['data'] : null;

                fieldsData[key] = {};
                fieldsData[key]['name'] = key;

                fieldsData[key]['data'] = isNotImageField ? pageContents[key]['data'] : null;

                if(!isNotImageField){
                    fieldsData[key]['previousUrl'] = pageContents[key]['data'] && pageContents[key]['data'].replace('public', "/storage");
                }

                fieldsData[key]['type'] = pageContents[key]['type'];

                if (isNotImageField){
                yupValSchema[key] = Yup.string()
                                .min(validationMinChars, `${key} must be at least ${validationMinChars} characters`)
                                .required(`${key} is required`);
                }

            } else {
              //caso 2. ha una traduzione
              //ciclo nelle traduzioni e creo un dato per fare un singolo
              //campo per ognuna di esse
                for (var langKey in pageContents[key]['data']) {

                    const objKeyLocalized = key + '__' + langKey;

                    formStartingValues[objKeyLocalized] = (isNotImageField) ? pageContents[key]['data'][langKey] : null;

                    fieldsData[objKeyLocalized] = {};
                    fieldsData[objKeyLocalized]['name'] = objKeyLocalized
                    fieldsData[objKeyLocalized]['data'] = pageContents[key]['data'][langKey];
                    fieldsData[objKeyLocalized]['type'] = pageContents[key]['type'];

                    if (isNotImageField){
                    yupValSchema[objKeyLocalized] = Yup.string()
                                    .min(validationMinChars, `${objKeyLocalized} must be at least ${validationMinChars} characters`)
                                    .required(`${objKeyLocalized} is required`);
                    }

                }
            }
        }

        //console.log(formStartingValues, fieldsData, yupValSchema)

    return  { formStartingValues, fieldsData, yupValSchema};

    }

  async prepareFormDataForSubmission(fields, pageId){

      const previousContents = JSON.parse(this.props.page.contents);

      console.log('previousContents', previousContents)
      console.log('fields', fields);

      for (var fieldName in previousContents) {

        var isNotImageField = previousContents[fieldName].type != 'image';

        if(previousContents[fieldName]['translated'] == false ){

          if (isNotImageField){

            previousContents[fieldName]['data'] = fields[fieldName];

          } else {//image
            debugger
              if (fields[fieldName] !== null){

                let imageFieldData = {
                  name: fieldName,
                  data: fields[fieldName],
                  previousurl: previousContents[fieldName]['data'],
                 pageid: pageId
               };
               console.log('imageFieldData', imageFieldData);

                  try {

                    const {data} =  await this.updateImageAndReturnUrl(imageFieldData);

                    console.log('storing image data', data);

                    previousContents[fieldName]['data'] = data.path;

                  } catch(error){

                    console.log('errore immagine',error, error.response.data.message)
                  }
              }


          }

        } else {

          for (var langKey in previousContents[fieldName]['data']) {

            var updatedContentData = Object.keys(fields).reduce((acc, fieldKey) => {

               const fieldNameAndLocale = fieldKey.split('__');

               if (fieldNameAndLocale[0] == fieldName){

                  acc[fieldNameAndLocale[1]] = fields[fieldKey]

               }

               return acc;

            },{})
            previousContents[fieldName]['data'] = updatedContentData;
            console.log('fields keys',updatedContentData)

          }

        }

      }

      console.log('done ready for submission',previousContents);
      
      return previousContents

    }

    async updateImageAndReturnUrl(imageFieldData){

        let formData = new FormData();
        //crea endpoint per ImageController per fare update singola immagine
        //ritorna Url nuova Immagine da mettere nel campo
        formData.append('file', imageFieldData.data);
        formData.append('fieldname', imageFieldData.name);
        formData.append('pageid',imageFieldData.pageid);
        formData.append('previousurl', imageFieldData.previousurl);

        console.log('sto per fare la chiamata di update delle immagini');

      try {

        return  await axios({
           url: `/api/admin/image/update-and-get-path`,
           data: formData ,
           method: 'post',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         });

      } catch(error){

        console.log('error submit', error);

        this.props.setSubmissionErrors([error.response.data.message]);

        return '';

      }

    }

    render() {

        if (this.state.apiErrors.length > 0)  return (<ErrorsAlert errors={this.state.apiErrors} />)

        return this.state.isLoading
                      ?
                (<div>Loading data...</div>)
                      :
                <WrappedComponent
                    pageFormData={this.state.pageFormData}
                    onSubmit={this.pageUpdate}
                    page={this.props.page}
                />
    }
  }

})

export default PageFormConnector;

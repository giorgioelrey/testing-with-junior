import React, { Component } from 'react';
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

    }

    componentDidMount(){

      console.log('hoc props componentDidMount PageForm Connector', this.props);

      this.setState({ isLoading: false, pageFormData: this.prepareFormDataForEdit(this.props.page) });

    }

    async pageUpdate(pageId, fields){

      //console.log('fields for update', fields)

        //console.log('about to update props', JSON.parse(this.props.page.contents))

        const updatedPageData = this.prepareFormDataForSubmission(fields);

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
            const validationMinChars = pageContents[key]['type'] == 'wisiwyg' ? 30 : 6;

            //caso 1. non ha una traduzione
            if (!fieldTranslated){

                formStartingValues[key] = pageContents[key]['data'];

                fieldsData[key] = {};
                fieldsData[key]['name'] = key
                fieldsData[key]['data'] = pageContents[key]['data'];
                fieldsData[key]['type'] = pageContents[key]['type'];

                yupValSchema[key] = Yup.string()
                                .min(validationMinChars, `${key} must be at least ${validationMinChars} characters`)
                                .required(`${key} is required`);

            } else {
              //caso 2. ha una traduzione
              //ciclo nelle traduzioni e creo un dato per fare un singolo
              //campo per ognuna di esse
                for (var langKey in pageContents[key]['data']) {

                    const objKeyLocalized = key + '__' + langKey;

                    formStartingValues[objKeyLocalized] = pageContents[key]['data'][langKey];

                    fieldsData[objKeyLocalized] = {};
                    fieldsData[objKeyLocalized]['name'] = objKeyLocalized
                    fieldsData[objKeyLocalized]['data'] = pageContents[key]['data'][langKey];
                    fieldsData[objKeyLocalized]['type'] = pageContents[key]['type'];

                    yupValSchema[objKeyLocalized] = Yup.string()
                                    .min(validationMinChars, `${objKeyLocalized} must be at least ${validationMinChars} characters`)
                                    .required(`${objKeyLocalized} is required`);

                }
            }
        }

    return  { formStartingValues, fieldsData, yupValSchema};

    }

    prepareFormDataForSubmission(fields){

      const previousContents = JSON.parse(this.props.page.contents);

      for (var fieldName in previousContents) {

        if(previousContents[fieldName]['translated'] == false ){

          previousContents[fieldName]['data'] = fields[fieldName];

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

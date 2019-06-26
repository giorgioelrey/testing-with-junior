import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PageForm = ({ page, yupSchema, onSubmit }) => {

    var formStartingValues = {}
    var fieldsData = {}

    var pageContents = JSON.parse(page.contents);
    console.log('pageContents come oggetto', pageContents)

    for (var key in pageContents) {


          //caso 1. non ha una traduzione
          if (pageContents[key]['translated'] === false){

              formStartingValues[key] = pageContents[key]['data'];

              fieldsData[key] = {};
              fieldsData[key]['name'] = key
              fieldsData[key]['data'] = pageContents[key]['data'];
              fieldsData[key]['type'] = pageContents[key]['type'];

          } else {
            //caso 2. ha una traduzione
            //ciclo nelle traduzioni e creo un dato per fare un singolo
            //campo per ognuna di esse
              for (var langKey in pageContents[key]['data']) {
                  formStartingValues[key + '_' + langKey] = pageContents[key]['data'][langKey];

                  fieldsData[key + '_' + langKey] = {};
                  fieldsData[key + '_' + langKey]['name'] = key + '_' + langKey
                  fieldsData[key + '_' + langKey]['data'] = pageContents[key]['data'][langKey];
                  fieldsData[key + '_' + langKey]['type'] = pageContents[key]['type'];

              }
          }
      }

    console.log('valori inizio form',formStartingValues)
    console.log('valori fields form',fieldsData)


    return(

        <Fragment>
        <Formik
               initialValues={formStartingValues}
               validationSchema={Yup.object().shape(yupSchema)}
               onSubmit={ (fields) => {onSubmit(fields)} }
               render={({ errors, status, touched }) => {
                 const fields = Object.values(fieldsData).map((field, idx) =>{

                   switch(field.type){
                     case 'string': return (
                       <div key={idx} className="form-group form-label-group">

                          <label htmlFor={field.name}>{field.name}</label>
                           <Field name={field.name} type="text" className={'form-control' + (errors[field.name] && touched[field.name] ? ' is-invalid' : '')} placeholder={'Type ' + field.name}/>
                           <ErrorMessage name={field.name} component="div" className="invalid-feedback" />
                       </div>
                     ); break;
                     case 'wisiwyg' : return (
                       <div key={idx} className="form-group form-label-group">
                          <label htmlFor={field.name}>{field.name}</label>

                          <Field name={field.name}>
                          {({ field, errors }) =>
                          {
                            console.log('wisiwyg', field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors[field.name] ? 'd-block' : '')}>{errors[field.name]}</div>

                       </div>
                     ); break;
                     default: break;
                   }
                 });

                 return (
                    <Form className="cms-form login">
                      {fields}
                      <div className="form-group">
                          <button type="submit" className="btn btn-primary mr-2">Update Page</button>                      
                      </div>
                    </Form>
                 )
               }

              }
           />

        </Fragment>
    );

}


export default PageForm;

PageForm.defaultProps = {
  initialValues: {
      title: '',
      subtitle: '',
      post_body: '',
      publish_status: '',
      category_id: '',
      slug: 'test',
      id: ''
  },
  yupSchema: {
      title: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      subtitle: Yup.string()
          .min(6, 'Subtitle must be at least 6 characters')
          .required('Subtitle is required'),
      post_body:  Yup.string()
         .min(30, 'Post body must be at least 30 characters')
          .required('Post body is required'),
      publish_status: Yup.string().
         required('Please select if you want to publish now or later'),
       category_id: Yup.string().
          required('Please select wich category you want to publish this post at')
  },
  pagesAvailable: [],
}

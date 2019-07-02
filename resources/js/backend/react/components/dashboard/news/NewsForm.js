import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewsForm = ({ post, categories, initialValues, yupSchema, pagesAvailable, onSubmit }) => {


    const formStartingValues = post && {
          title_it: post.title_it || '',
          title_en: post.title_en || '',
          postbody_it: post.postbody_it || '',
          postbody_en: post.postbody_en || '',
          category_id: post.category_id || '',
          id: post.id || ''
      } || initialValues;

      console.log(formStartingValues)

    return(

        <Fragment>
        <Formik
               initialValues={formStartingValues}
               validationSchema={Yup.object().shape(yupSchema)}
               onSubmit={ (fields) => {onSubmit(fields)} }
               render={({ errors, status, touched }) => (
                   <Form className="cms-form login">

                      <Field type="hidden" className="form-control" name="id" ></Field>

                       <div className="form-group form-label-group">

                          <label htmlFor="title_it">Title IT</label>
                           <Field name="title_it" type="text" className={'form-control' + (errors.title_it && touched.title_it ? ' is-invalid' : '')} placeholder="Type title_it"/>
                           <ErrorMessage name="title_it" component="div" className="invalid-feedback" />

                       </div>
                       <div className="form-group form-label-group">

                          <label htmlFor="title_en">Title</label>
                           <Field name="title_en" type="text" className={'form-control' + (errors.title_en && touched.title_en ? ' is-invalid' : '')} placeholder="Type title_en"/>
                           <ErrorMessage name="title_en" component="div" className="invalid-feedback" />

                       </div>

                       <div className="form-group form-label-group">
                          <label htmlFor="postbody_it">Post Body IT</label>

                          <Field name="postbody_it">
                          {({ field, errors }) =>
                          {
                            //console.log(field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.postbody_it ? 'd-block' : '')}>{errors.postbody_it}</div>

                       </div>
                       <div className="form-group form-label-group">
                          <label htmlFor="postbody_en">Post Body EN</label>

                          <Field name="postbody_en">
                          {({ field, errors }) =>
                          {
                            //console.log(field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.postbody_en ? 'd-block' : '')}>{errors.postbody_en}</div>

                       </div>

                      {categories.length > 0 &&
                       (
                         <div className="form-group form-label-group">
                          <label htmlFor="category_id">Where do you want to publish this post at</label>
                           <Field name="category_id" component="select" className={'form-control ' + (errors.category_id && touched.category_id ? ' is-invalid' : '')}>
                             <option value="">Select destination page</option>
                              {
                                categories.map((category, idx) =>
                                ( <option key={idx} value={category.id} >{category.name}</option>))
                              }
                            </Field>
                             <ErrorMessage name="category_id" component="div" className="invalid-feedback" />
                         </div>
                       ) || null}

                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">Submit new post</button>
                           <button type="reset" className="btn btn-info text- mr-2">Reset</button>
                       </div>
                   </Form>
               )}
           />

        </Fragment>
    );

}


export default NewsForm;

NewsForm.defaultProps = {
  initialValues: {
      title_it: '',
      title_en: '',
      postbody_it: '',
      postbody_en: '',
      category_id: '',
      id: ''
  },
  yupSchema: {
      title_it: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      title_en: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      postbody_it:  Yup.string()
         .min(30, 'Post body must be at least 30 characters')
          .required('Post body is required'),
      postbody_en:  Yup.string()
         .min(30, 'Post body must be at least 30 characters')
          .required('Post body is required'),
       category_id: Yup.string().
          required('Please select wich category you want to publish this post at')
  },
  pagesAvailable: [],
}

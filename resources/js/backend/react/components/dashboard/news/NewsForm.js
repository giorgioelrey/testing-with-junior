import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewsForm = ({ post, categories, initialValues, yupSchema, pagesAvailable, onSubmit }) => {


    const formStartingValues = post && {
          title: post.title || '',
          post_body: post.post_body || '',
          publish_status: post.publish_status || '',
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

                          <label htmlFor="title">Title</label>
                           <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} placeholder="Type title"/>
                           <ErrorMessage name="title" component="div" className="invalid-feedback" />

                       </div>

                       <div className="form-group form-label-group">
                          <label htmlFor="post_body">Post Body</label>

                          <Field name="post_body">
                          {({ field, errors }) =>
                          {
                            //console.log(field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.post_body ? 'd-block' : '')}>{errors.post_body}</div>

                       </div>

                       <div className="form-group form-label-group">
                          <label htmlFor="publish_status">When do you want to publish</label>
                           <Field name="publish_status" component="select" className={'form-control ' + (errors.publish_status && touched.publish_status ? ' is-invalid' : '')}>
                             <option value="">Select now or later</option>
                             <option value="now">Now</option>
                             <option value="pending">Later</option>
                            </Field>
                           <ErrorMessage name="publish_status" component="div" className="invalid-feedback" />
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
      title: '',
      post_body: '',
      category_id: '',
      id: ''
  },
  yupSchema: {
      title: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      post_body:  Yup.string()
         .min(30, 'Post body must be at least 30 characters')
          .required('Post body is required'),
       category_id: Yup.string().
          required('Please select wich category you want to publish this post at')
  },
  pagesAvailable: [],
}

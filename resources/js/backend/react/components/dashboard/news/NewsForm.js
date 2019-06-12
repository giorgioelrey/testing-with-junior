import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewsForm = ({ post, initialValues, yupSchema, pagesAvailable, onSubmit }) => {


    const formStartingValues = post && {
          title: post.title || '',
          subtitle: post.subtitle || '',
          post_body: post.post_body || '',
          publish_status: post.publish_status || '',
          destination_page: post.destination_page || '',
          slug: post.slug || 'test',
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
                          <label htmlFor="subtitle">Subtitle</label>
                           <Field name="subtitle" type="text" className={'form-control' + (errors.subtitle && touched.subtitle ? ' is-invalid' : '')} placeholder="Type subtitle"/>

                           <ErrorMessage name="subtitle" component="div" className="invalid-feedback" />
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

                      {pagesAvailable.length > 0 &&
                       (
                         <div className="form-group form-label-group">
                          <label htmlFor="destination_page">Where do you want to publish this post at</label>
                           <Field name="destination_page" component="select" className={'form-control ' + (errors.destination_page && touched.destination_page ? ' is-invalid' : '')}>
                             <option value="">Select destination page</option>
                              {
                                pagesAvailable.map((page, idx) =>
                                ( <option key={idx} value={idx} >{page}</option>))
                              }
                            </Field>
                             <ErrorMessage name="destination_page" component="div" className="invalid-feedback" />
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
      subtitle: '',
      post_body: '',
      publish_status: '',
      destination_page: '',
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
       destination_page: Yup.string().
          required('Please select wich page you want to publish this post at')
  },
  pagesAvailable: [],
}

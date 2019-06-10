import React, { Component, Fragment } from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import ErrorsAlert from './ErrorsAlert';

class NewsCreate extends Component {

  constructor(props){
    super(props);

    this.state = {
      errors: []
    }
  }

  render() {

    let errorsContent = this.state.errors.length > 0 && (<ErrorsAlert errors={this.state.errors} />) || null;

    return (
      <Fragment>
        <div className="container" id="create-news-page">

          <div className="card card-login mx-auto mt-5">

                <div className="card-header">
                  <h1>Create a new post</h1>
                </div>

                <div className="card-body">

                {errorsContent}

                <Formik
                       initialValues={{
                           title: '',
                           subtitle: '',
                           post_body: ''
                       }}
                       validationSchema={Yup.object().shape({
                           title: Yup.string()
                              .min(6, 'Title must be at least 6 characters')
                               .required('Title is required'),
                           subtitle: Yup.string()
                               .min(6, 'Subtitle must be at least 6 characters')
                               .required('Subtitle is required'),
                           post_body:  Yup.string()
                              .min(30, 'Subtitle must be at least 30 characters')
                               .required('Post body is required')
                       })}
                       onSubmit={async fields => {
                           console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 3));

                           try {
                                console.log('fields', fields)

                                const { data } = await axios(axiosHelper.getLoginConfig(fields));

                                console.log('login response.data ', data);

                                this.props.history.push('/admin/dashboard');

                              } catch(error) {

                                console.log('login issues', error.response.data);

                                this.setState({errors: [error.response.data.errors]})

                              }

                       }}
                       render={({ errors, status, touched }) => (
                           <Form className="cms-form login">
                               <div className="form-group form-label-group">
                                  <label htmlFor="title">Title</label>
                                   <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} placeholder="Email address"/>
                                   <ErrorMessage name="title" component="div" className="invalid-feedback" />

                               </div>
                               <div className="form-group form-label-group">
                                  <label htmlFor="subtitle">Subtitle</label>
                                   <Field name="subtitle" type="subtitle" className={'form-control' + (errors.subtitle && touched.subtitle ? ' is-invalid' : '')} placeholder="subtitle"/>

                                   <ErrorMessage name="subtitle" component="div" className="invalid-feedback" />
                               </div>

                               <div className="form-group form-label-group">
                                  <label htmlFor="subtitle">Subtitle</label>
                                  <Field name="designation">{({ field }) => <ReactQuill value={field.value} onChange={field.onChange(field.name)} />}</Field>

                               </div>

                               <div className="form-group">
                                   <button type="submit" className="btn btn-primary mr-2">Submit new post</button>
                                   <button type="reset" className="btn btn-info text- mr-2">Reset</button>
                               </div>
                           </Form>
                       )}
                   />

                </div>

          </div>

        </div>

      </Fragment>
    );
  }

}

export default NewsCreate;

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';

//Helpers
import * as pagesHelper from './../../../helpers/pagesHelper';
import * as postHelper from './../../../helpers/postHelper';

class NewsCreate extends Component {

  constructor(props){
    super(props);

    this.state = { errors: [], pages_available: [], api_error: null}
  }


  componentDidMount(){

    //getAllPagesAvailableForPublishing(success, fail)
    pagesHelper.getAllPages(
      ({data}) => { console.log('pages found', data); this.setState({pages_available: data}) },
      (error) => {console.log(error); this.setState({ api_error: error}) }
    )

  }

  render() {

    let errorsContent = this.state.errors.length > 0 && (<ErrorsAlert errors={this.state.errors} />) || null;

    return (
      <Fragment>
        <div className="container" id="create-news-page">

                <h1>Create a new post</h1>
                {this.state.api_error }
                {errorsContent}

                <Formik
                       initialValues={{
                           title: '',
                           subtitle: '',
                           post_body: '',
                           publish_status: '',
                           destination_page: '',
                           slug: 'test'
                       }}
                       validationSchema={Yup.object().shape({
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
                       })}
                       onSubmit={async fields => {
                           console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 3));


                            postHelper.submitPost(fields,
                                ({data}) => {

                                  console.log('success', data);

                                  this.props.history.push('/admin/dashboard/news');

                                },
                                (error) => {

                                  console.log('error submit', error)
                                    this.setState({api_error: error})
                                }
                            )



                       }}
                       render={({ errors, status, touched }) => (
                           <Form className="cms-form login">
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

                              {this.state.pages_available.length > 0 &&
                               (
                                 <div className="form-group form-label-group">
                                  <label htmlFor="destination_page">Where do you want to publish this post at</label>
                                   <Field name="destination_page" component="select" className={'form-control ' + (errors.destination_page && touched.destination_page ? ' is-invalid' : '')}>
                                     <option value="">Select destination page</option>
                                      {
                                        this.state.pages_available.map((page, idx) =>
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

        </div>
      </Fragment>
    );
  }

}

export default withRouter(NewsCreate);

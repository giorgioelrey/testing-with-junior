import React, { Component, Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import logo_core from './../assets/logo_core.png';
import ErrorsAlert from './ErrorsAlert';
//Helpers
import * as axiosHelper from './../helpers/axiosHelper';

class LoginPage extends Component {


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
        <div className="container" id="login-page">

          <div className="card card-login mx-auto mt-5">

                <div className="card-header">
                  <img className="cms-logo img-fluid"src={logo_core} alt="ciao" />
                </div>

                <div className="card-body">

                {errorsContent}

                <Formik
                       initialValues={{
                           email: '',
                           password: '',
                           password_confirmation: ''
                       }}
                       validationSchema={Yup.object().shape({
                           email: Yup.string()
                               .email('Email is invalid')
                               .required('Email is required'),
                           password: Yup.string()
                               .min(6, 'Password must be at least 6 characters')
                               .required('Password is required'),
                           password_confirmation:  Yup.string()
                               .oneOf([Yup.ref('password'), null], 'Passwords must match')
                               .required('Confirm Password is required')
                       })}
                       onSubmit={async fields => {
                           console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));

                           try {
                                console.log('fields', fields)

                                const { data } = await axios(axiosHelper.getLoginConfig(fields));

                                console.log('login response.data ', data);

                                this.props.history.push('/admin/dashboard');

                              } catch(error) {

                                console.log('login issues', error.response.data);

                                this.setState({errors: error.response.data.errors})

                              }

                       }}
                       render={({ errors, status, touched }) => (
                           <Form className="cms-form login">
                               <div className="form-group form-label-group">
                                  <label htmlFor="email">Email</label>
                                   <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Email address"/>
                                   <ErrorMessage name="email" component="div" className="invalid-feedback" />

                               </div>
                               <div className="form-group form-label-group">
                                  <label htmlFor="password">Password</label>
                                   <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="password"/>

                                   <ErrorMessage name="password" component="div" className="invalid-feedback" />
                               </div>
                               <div className="form-group form-label-group">
                                  <label htmlFor="password-confirmation">Confirm Password</label>
                                   <Field name="password_confirmation" type="password" className={'form-control' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : '')} placeholder="password confirmation"/>
                                   <ErrorMessage name="password_confirmation" component="div" className="invalid-feedback" />
                               </div>
                               <div className="form-group">
                                   <button type="submit" className="btn btn-primary mr-2">Login</button>
                                   <button type="reset" className="btn btn-info text- mr-2">Reset</button>
                                   <button type="submit" className="btn btn-warning text-white">Forgot Password</button>
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

export default LoginPage;

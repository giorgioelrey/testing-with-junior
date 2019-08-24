import React, { Component, Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link,Redirect, withRouter} from 'react-router-dom';
import logo_core from './../../assets/logo_core.png';
import ErrorsAlert from './../ErrorsAlert';
//Helpers
import * as axiosHelper from './../../helpers/axiosHelper';

class LoginPage extends Component {

constructor(props){
  super(props);

  this.state = {
    redirectToReferrer: false
  }

  this.submitLoginForm = this.submitLoginForm.bind(this);

}

submitLoginForm(fields) {

  this.props.submitForm(fields,
  () => {
    this.setState({ redirectToReferrer: true }, () => {
      console.log('user logged')
    });
  });

}

  render() {


    let errorsContent = this.props.errors.length > 0 && (<ErrorsAlert errors={this.props.errors} />) || null;

    const { from } = this.props.location && this.props.location.state || { from: { pathname: '/admin/dashboard/news' } }

     if (this.state.redirectToReferrer === true) {

      console.log('redirecting to', from)
       return <Redirect to={from} />
     }

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
                       }}
                       validationSchema={Yup.object().shape({
                           email: Yup.string()
                               .email('Email is invalid')
                               .required('Email is required'),
                           password: Yup.string()
                               .min(6, 'Password deve avere almeno 6 caratteri')
                               .required('Password is required'),
                       })}
                       onSubmit={this.submitLoginForm}
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

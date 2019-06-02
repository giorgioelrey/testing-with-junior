import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import logo_core from './../assets/logo_core.png';

class LoginPage extends Component {


  render() {
    return (
      <Fragment>
        <div className="container" id="login-page">

          <div className="card card-login mx-auto mt-5">

                <div className="card-header">
                  <img src={logo_core} alt="ciao" />
                </div>

                <div className="card-body">
                  Here goes the Login Form
                  Must create logic or delegate to laravel
                  and load page then


                  <Link className="btn btn-primary btn-lg" to="/admin/dashboard">Go to Dashboard</Link>

                </div>

          </div>

        </div>

      </Fragment>
    );
  }
}

export default LoginPage;

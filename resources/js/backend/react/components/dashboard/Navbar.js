import React, { Component, Fragment } from 'react';
//withRouter gives us the ability to navigate
//even if the component is not within a Route
import { NavLink, withRouter } from 'react-router-dom';
import logo_core from './../../assets/logo_core.png';

class Navbar extends Component {

  constructor(props){
    super(props);

    this.backToTheHomePage = this.backToTheHomePage.bind(this);
    this.logout = this.logout.bind(this);

  }

  backToTheHomePage(){ this.props.history.push('/admin') }

  logout() {
    this.props.logoutAction(this.props.user.token)
  }

  render() {

    //SHOW LINKS based on userLogin status
    let authLinks = null

    if (this.props.user.token !== ''){//LOGGED IN
      authLinks = (
        <Fragment>
          <NavLink className="nav-item nav-link" to="/admin/">
            <button className="ml-5 btn btn-danger" onClick={this.logout}>Logout</button>
          </NavLink>

        </Fragment>
      )
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-light shadow sticky-top" id="navbar-backoffice" >

        <NavLink className="navbar-brand" to="/admin/dashboard">
          <img height="30" src={logo_core} alt="ciao" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {authLinks}
          </div>
        </div>
      </nav>

    );
  }
}

//passes match, history, location to Component
export default withRouter(Navbar);

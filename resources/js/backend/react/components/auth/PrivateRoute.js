import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component,  user, ...rest }) => {


  return   (<Route {...rest} render={(props) => {

    return (
    (user.token && user.token !== null && user.token !== undefined)
        ? <Component {...props} user={user} {...rest} />
        : <Redirect to={{
            pathname: '/admin',
            state: { from: props.location }
          }} />
    )}} />
  )

}


export default PrivateRoute;

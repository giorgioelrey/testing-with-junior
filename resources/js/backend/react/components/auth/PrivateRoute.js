import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component,  user, ...rest }) => {

console.log('props private', rest)

  return   (<Route {...rest} render={(props) => {

    //console.log('token check', user.token);

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

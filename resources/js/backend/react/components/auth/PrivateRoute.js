import {Switch, Route, Link, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
  (1 === true)
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/admin',
          state: { from: props.location }
        }} />
  )} />
)

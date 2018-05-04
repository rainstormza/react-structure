import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../../features/Login/fakeAsynce'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

// https://gist.github.com/rainstormza/92e93f422075ca2087ef5f835500f9f2

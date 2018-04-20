import React from 'react'
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'
import MDSpinner from 'react-md-spinner'

const styleLoading = {
  position: 'fixed',
  margin: 'auto',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: 101
}

const Loading = () => <MDSpinner size="80" style={styleLoading} />

const Login = Loadable({
  loader: () => import('./features/Login/Login'),
  loading: Loading
})

const Home = Loadable({
  loader: () => import('./features/Home/Home'),
  loading: Loading
})

const Test = Loadable({
  loader: () => import('./features/Test/Test'),
  loading: Loading
})

const Routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/login" />
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/test',
    component: Test
  }
]

export default Routes

// https://alligator.io/react/react-router-map-to-routes/

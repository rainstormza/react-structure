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
  right: '0'
}

const Loading = () => <MDSpinner size="80" style={styleLoading} />

const Home = Loadable({
  loader: () => import('./features/Home/Home'),
  loading: Loading
})

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/home" />
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes

// https://alligator.io/react/react-router-map-to-routes/

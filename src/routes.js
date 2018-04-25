import React from 'react'
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'
import Loading from './common/Loading/Loading'

const Login = Loadable({
  loader: () => import('./features/Login/Login'),
  loading: Loading
})

const Counter = Loadable({
  loader: () => import('./features/Counter/Counter'),
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

// Home.preload()
Test.preload()

const Routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/login" />
  },
  {
    path: '/login',
    component: Login,
    hasLayout: false
  },
  {
    path: '/counter',
    component: Counter,
    hasLayout: false
  },
  {
    path: '/home',
    component: Home,
    hasLayout: true
  },
  {
    path: '/test',
    component: Test,
    hasLayout: true
  }
]

export default Routes

// https://alligator.io/react/react-router-map-to-routes/

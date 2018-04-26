import Loadable from 'react-loadable'
import Loading from './common/Loading/Loading'
// import { Redirect } from 'react-router-dom'

// const Login = Loadable({
//   loader: () => import('./features/Login/Login'),
//   loading: Loading
// })

// const Counter = Loadable({
//   loader: () => import('./features/Counter/Counter'),
//   loading: Loading
// })

const Layout = Loadable({
  loader: () => import('./common/Layout/Layout'),
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
    component: Layout
    // render: () => <Redirect to="/home" />
  },
  // {
  //   path: '/login',
  //   component: Login,
  // },
  // {
  //   path: '/counter',
  //   component: Counter,
  // },
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

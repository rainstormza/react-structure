import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Route, Switch } from 'react-router-dom'
import LayoutApp from './common/Layout/Layout'
// import Footer from './common/Footer'
import Loadable from 'react-loadable'
import Loading from './common/Loading/Loading'

const Login = Loadable({
  loader: () => import('./features/Login/Login'),
  loading: Loading
})

const Counter = Loadable({
  loader: () => import('./features/Counter/Counter'),
  loading: Loading
})

const Site = styled.div`
  /* display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  ${media.lessThan('small')`
    background: black;
  `}; */
`

const SiteContent = styled.div`
  /* flex: 1; */
`

class App extends Component {
  render() {
    return (
      <Site>
        <SiteContent>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/counter" component={Counter} />
            <Route path="/" component={LayoutApp} />
            {/* route best practice */}
            {/* https://github.com/coreui/coreui-free-react-admin-template/blob/master/src/App.js */}
          </Switch>
        </SiteContent>
        {/* <Footer /> */}
      </Site>
    )
  }
}

export default App

import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Route, Redirect, Switch } from 'react-router-dom'
import Routes from './Routes'
import LayoutApp from './common/Layout/Layout'
// import Footer from './common/Footer'

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
    const routesWithoutLayout = []
    const routesWithLayout = []
    Routes.map(({ path, component, exact, render }, key) => {
      if (path === '/login') {
        routesWithoutLayout.push(
          <Route
            exact={exact}
            path={path}
            component={component}
            key={key}
            render={render}
          />
        )
      } else {
        routesWithLayout.push(
          <Route
            exact={exact}
            path={path}
            component={component}
            key={key}
            render={render}
          />
        )
      }
      return true
    })
    return (
      <Site>
        <SiteContent>
          <Switch>
            {routesWithoutLayout}
            <LayoutApp>{routesWithLayout}</LayoutApp>
            {/* route best practice */}
            {/* https://github.com/coreui/coreui-free-react-admin-template/blob/master/src/App.js */}
            <Redirect to="/" />
          </Switch>
        </SiteContent>
        {/* <Footer /> */}
      </Site>
    )
  }
}

export default App

import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Route, Redirect, Switch } from 'react-router-dom'
import routes from './routes'
import logo from './logo.svg'
import './App.css'
import { Button } from 'reactstrap'
import Footer from './common/Footer'

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  ${media.lessThan('small')`
    background: #222;
  `};
`

const SiteContent = styled.div`
  flex: 1;
`

class App extends Component {
  render() {
    const routeComponents = routes.map(
      ({ path, component, exact, render }, key) => (
        <Route
          exact={exact}
          path={path}
          component={component}
          key={key}
          render={render}
        />
      )
    )
    return (
      <Site>
        <SiteContent>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Button color="danger">Danger!</Button>
            <Switch>
              {routeComponents}
              <Redirect to="/" />
            </Switch>
          </div>
        </SiteContent>
        <Footer />
      </Site>
    )
  }
}

export default App

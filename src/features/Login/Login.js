import React from 'react'
import './Login.css'
import logo from '../../logo.svg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/home">
          <Button type="primary" size="large">
            Login
          </Button>
        </Link>
      </div>
      {/* <h2>Login</h2> */}
    </div>
  )
}

export default Login

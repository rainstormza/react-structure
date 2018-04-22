import React from 'react'
import './Login.css'
import logo from '../../logo.svg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementAsync,
  fetchData,
  incrementAsyncEpic,
  fetchDataEpic
} from './redux'

const Login = props => {
  // console.log(props)
  const {
    login,
    decrement,
    increment,
    incrementAsync,
    fetchData,
    incrementAsyncEpic,
    fetchDataEpic
  } = props
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
        <p>Counter: {login.counter}</p>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={incrementAsync}>Increment Async</Button>
        <Button onClick={incrementAsyncEpic}>Increment Async Epic</Button>
        <br />
        <Button
          type="primary"
          icon="reload"
          loading={login.isLoading}
          onClick={fetchData}
        >
          Click me!
        </Button>
        <p>{JSON.stringify(login.data)}</p>
        <Button
          type="primary"
          icon="reload"
          loading={login.isLoading}
          onClick={fetchDataEpic}
        >
          Click me Epic!
        </Button>
        <p>{JSON.stringify(login.data)}</p>
      </div>
      {/* <h2>Login</h2> */}
    </div>
  )
}

export default connect(state => state, {
  increment,
  decrement,
  incrementAsync,
  fetchData,
  incrementAsyncEpic,
  fetchDataEpic
})(Login)

// conntect(mapStateToProps, mapDispatchToProps)

// shorthand syntax
// const mapDispatchToProps = { setField, resetFields, setCountdown };

// full syntax
// const mapDispatchToProps = dispatch => ({
//   setField: (key, value) => dispatch(setField(key, value)),
//   resetFields: () => dispatch(resetFields()),
//   setCountdown: () => dispatch(setCountdown())
// })

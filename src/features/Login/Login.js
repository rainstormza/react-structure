import React from 'react'
import './Login.css'
import logo from '../../logo.svg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increment, decrement } from './redux'

const Login = props => {
  // console.log(props.counter)
  const { counter, decrement, increment } = props
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
        <p>Counter: {counter}</p>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
      </div>
      {/* <h2>Login</h2> */}
    </div>
  )
}

export default connect(state => state, { increment, decrement })(Login)

// conntect(mapStateToProps, mapDispatchToProps)

// shorthand syntax
// const mapDispatchToProps = { setField, resetFields, setCountdown };

// full syntax
// const mapDispatchToProps = dispatch => ({
//   setField: (key, value) => dispatch(setField(key, value)),
//   resetFields: () => dispatch(resetFields()),
//   setCountdown: () => dispatch(setCountdown())
// })

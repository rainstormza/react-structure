import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/logo.svg'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { authRequest } from './redux'
const FormItem = Form.Item

const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    console.log('submit')
    this.props.authRequest(this.state.username, this.state.password)
    // if (this.state.username === 'test' && this.state.password === '1234') {
    //   console.log('login success')
    //   this.props.history.push('/home')
    // } else {
    //   console.log('login failed')
    // }
  }

  handleInput = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  render() {
    console.log(this.props)
    const { login } = this.props

    return (
      <div>
        {login.token && <Redirect to="/home" />}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <FormStyle>
            <Form className="login-form">
              <FormItem>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                  onChange={e => this.handleInput('username', e.target.value)}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={e => this.handleInput('password', e.target.value)}
                />
              </FormItem>
              <FormItem>
                {/* <Link to="/home"> */}
                {login.error && <p>{login.error}</p>}
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
                {/* </Link> */}
              </FormItem>
            </Form>
          </FormStyle>
          <Link to="/counter">
            <Button type="danger">Go to Counter</Button>
          </Link>
          <p>REACT_APP_SECRET_CODE: {process.env.REACT_APP_SECRET_CODE}</p>
          <p>REACT_APP_STAGE: {process.env.REACT_APP_STAGE}</p>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    login: state.login
  }),
  { authRequest }
)(Login)

// conntect(mapStateToProps, mapDispatchToProps)

// shorthand syntax
// const mapDispatchToProps = { setField, resetFields, setCountdown };

// full syntax
// const mapDispatchToProps = dispatch => ({
//   setField: (key, value) => dispatch(setField(key, value)),
//   resetFields: () => dispatch(resetFields()),
//   setCountdown: () => dispatch(setCountdown())
// })

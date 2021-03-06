import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/logo.svg'
import { connect } from 'react-redux'
import { authRequest, resetErrorMessage } from './redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import fakeAuth from './fakeAsynce'
// import { Form, Icon, Input, Button } from 'antd'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
const FormItem = Form.Item

const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MySwal = withReactContent(Swal)

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

  handleAlert = message => {
    console.log('message: ', message)
    MySwal.fire({
      title: <p>{message}</p>,
      type: 'error'
    }).then(() => {
      this.props.resetErrorMessage()
    })
  }

  render() {
    // console.log(this.props)
    const { login } = this.props

    if (fakeAuth.isAuthenticated) {
      return <Redirect to="/home" />
    }

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
                {login.error && this.handleAlert(login.error)}
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
  { authRequest, resetErrorMessage }
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

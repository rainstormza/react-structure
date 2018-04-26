import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementAsync,
  fetchData,
  incrementAsyncEpic,
  fetchDataEpic
} from './redux'

const CounterContainer = styled.div`
  text-align: center;
`

class Counter extends Component {
  render() {
    // console.log(this.props)
    const {
      counter,
      increment,
      decrement,
      incrementAsync,
      fetchData,
      incrementAsyncEpic,
      fetchDataEpic
    } = this.props

    return (
      <CounterContainer>
        <Link to="/login">
          <Button type="danger">Go to Login</Button>
        </Link>
        <p>Counter: {counter.counter}</p>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={incrementAsync}>Increment Async</Button>
        <Button onClick={incrementAsyncEpic}>Increment Async Epic</Button>
        <br />
        <Button
          type="primary"
          icon="reload"
          loading={counter.isLoading}
          onClick={fetchData}
        >
          Click me!
        </Button>
        <p>{JSON.stringify(counter.data)}</p>
        <Button
          type="primary"
          icon="reload"
          loading={counter.isLoading}
          onClick={fetchDataEpic}
        >
          Click me Epic!
        </Button>
        <p>{JSON.stringify(counter.data)}</p>
      </CounterContainer>
    )
  }
}

export default connect(
  state => ({
    counter: state.counter
  }),
  {
    increment,
    decrement,
    incrementAsync,
    fetchData,
    incrementAsyncEpic,
    fetchDataEpic
  }
)(Counter)

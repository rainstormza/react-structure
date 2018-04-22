import React from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { setField } from './redux'

const Home = props => {
  const { home, setField } = props
  return (
    <div>
      <h2>Home</h2>
      {home.text}
      <Input
        placeholder="Basic usage"
        onChange={e => setField(e.target.value)}
      />
    </div>
  )
}

export default connect(state => state, { setField })(Home)

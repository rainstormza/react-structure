import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'

it('renders without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,

    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
configure({ adapter: new Adapter() })
const middlewares = []
const mockStore = configureStore(middlewares)

describe('<App />', () => {
  it('renders without crashing 2', () => {
    const initialState = {}
    const store = mockStore(initialState)
    let container
    container = shallow(<App store={store} />)
    expect(container.length).toEqual(1)
  })

  // import { configure, shallow } from 'enzyme'
  // import Adapter from 'enzyme-adapter-react-16'
  // configure({ adapter: new Adapter() })

  it('App component should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })
})

// https://github.com/arnaudbenard/redux-mock-store

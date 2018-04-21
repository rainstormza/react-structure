import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'
import logger from 'redux-logger'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import reducer from './features/Login/redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger] // more middleware
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

sagaMiddleware.run(helloSaga)
// const action = type => store.dispatch({ type })

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'

import logger from 'redux-logger'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = [sagaMiddleware, epicMiddleware, logger] // more middleware
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)
// const action = type => store.dispatch({ type })

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

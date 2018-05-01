import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from '../epics'
import logger from 'redux-logger'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = [sagaMiddleware, epicMiddleware, logger] // more middleware

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

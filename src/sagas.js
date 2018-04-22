import { delay } from 'redux-saga'
import { call, put, takeEvery, all, take, select } from 'redux-saga/effects'
import axios from 'axios'

// eslint-disable-next-line
export function* helloSaga() {
  console.log('Hello Saga!')
  /* saga Logger */
  while (true) {
    const action = yield take('*'),
      state = yield select()
    console.log('action:', action)
    console.log('state:', state)
  }
  /* saga Logger */
}

export function* incrementAsync() {
  yield call(delay, 2000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  console.log('watchIncrementAsync')
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

const getData = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(res => res.data)
    .catch(err => {
      throw err
    })

export function* fetchData(action) {
  try {
    const data = yield call(getData)
    // const data = yield call(
    //   axios.get,
    //   'https://jsonplaceholder.typicode.com/posts/1'
    // )
    yield put({ type: 'FETCH_SUCCEEDED', data })
    // yield put({ type: 'HIDE_LOADING_INDICATOR' })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
    // yield put({ type: 'HIDE_LOADING_INDICATOR' })
  }
}

function* watchFetchData() {
  console.log('watchFetchData')
  yield takeEvery('FETCH_REQUESTED', fetchData)
  // yield put({ type: 'SHOW_LOADING_INDICATOR' })
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchFetchData()])
}

// https://blog.appsynth.net/%E0%B8%84%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%A1-flow-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%AD%E0%B8%9E-react-native-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-redux-saga-4a85cebb1773

// https://medium.freecodecamp.org/async-operations-using-redux-saga-2ba02ae077b3

// https://medium.freecodecamp.org/async-operations-using-redux-saga-2ba02ae077b3

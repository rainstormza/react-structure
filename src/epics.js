import axios from 'axios'
import { combineEpics } from 'redux-observable'
import { ofType } from 'redux-observable'
import { of } from 'rxjs/observable/of'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { delay, mapTo, map, mergeMap, catchError } from 'rxjs/operators' // rxjs v5.5+
import 'rxjs'
// import { ajax } from 'rxjs/observable/dom/ajax'

const incrementAsync = action$ =>
  action$.pipe(
    ofType('INCREMENT_ASYNC_EPIC'),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'INCREMENT' })
  )

const fetchData = action$ =>
  action$.pipe(
    ofType('FETCH_REQUESTED_EPIC'),
    mergeMap(() =>
      fromPromise(
        axios.get('https://jsonplaceholder.typicode.com/posts/2x')
      ).pipe(
        map(res => ({ type: 'FETCH_SUCCEEDED', data: res.data })),
        catchError(err => of({ type: 'FETCH_FAILED', err }))
      )
    )
  )

// action$.ofType('FETCH_REQUESTED_EPIC').mergeMap(action =>
//   ajax
//     .getJSON(`https://jsonplaceholder.typicode.com/posts/2x`)
//     .map(res => ({ type: 'FETCH_SUCCEEDED', data: res }))
//     .catch(error =>
//       of({
//         type: 'FETCH_FAILED',
//         error: error.xhr.response,
//         error: true
//       })
//     )
// )

export const rootEpic = combineEpics(incrementAsync, fetchData)

// https://stackoverflow.com/questions/40021344/why-use-redux-observable-over-redux-saga?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

// https://www.learnrxjs.io/operators/creation/frompromise.html

// https://redux-observable.js.org/docs/recipes/Cancellation.html

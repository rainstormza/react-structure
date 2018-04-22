import axios from 'axios'
import { combineEpics } from 'redux-observable'
import { ofType } from 'redux-observable'
import { of } from 'rxjs/observable/of'
import { delay, mapTo, map, flatMap, catchError } from 'rxjs/operators' // rxjs v5.5+

const incrementAsync = action$ =>
  action$.pipe(
    ofType('INCREMENT_ASYNC_EPIC'),
    delay(2000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'INCREMENT' })
  )

const fetchData = action$ =>
  action$.pipe(
    ofType('FETCH_REQUESTED_EPIC'),
    flatMap(() => axios.get('https://jsonplaceholder.typicode.com/posts/2x')),
    map(res => ({ type: 'FETCH_SUCCEEDED', data: res.data })),
    catchError(err => of({ type: 'FETCH_FAILED', err }))
  )

export const rootEpic = combineEpics(incrementAsync, fetchData)

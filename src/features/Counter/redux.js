const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
const INCREMENT_ASYNC_EPIC = 'INCREMENT_ASYNC_EPIC'

const FETCH_REQUESTED = 'FETCH_REQUESTED'
const FETCH_REQUESTED_EPIC = 'FETCH_REQUESTED_EPIC'
const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED'
const FETCH_FAILED = 'FETCH_FAILED'

const initialState = {
  counter: 0,
  isLoading: false,
  data: {},
  err: null
}

const reducer = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case INCREMENT_ASYNC:
      return {
        ...state
      }
    case INCREMENT_ASYNC_EPIC:
      return {
        ...state
      }
    case FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_REQUESTED_EPIC:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.err
      }
    default:
      return state
  }
}
export default reducer

// action creators
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC
})

export const incrementAsyncEpic = () => ({
  type: INCREMENT_ASYNC_EPIC
})

export const fetchData = () => ({
  type: FETCH_REQUESTED
})

export const fetchDataEpic = () => ({
  type: FETCH_REQUESTED_EPIC
})

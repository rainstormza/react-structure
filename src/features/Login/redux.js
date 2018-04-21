const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  console.log(state, action)
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
    default:
      return state
  }
}
export default reducer

// action creator
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

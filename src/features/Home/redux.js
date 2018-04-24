const SET_FIELD = 'SET_FIELD'

const initialState = {
  text: ''
}

const reducer = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        text: action.value
      }
    default:
      return state
  }
}
export default reducer

// action creators
export const setField = value => ({
  type: SET_FIELD,
  value
})

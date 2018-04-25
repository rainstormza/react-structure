const AUTHEN_REQUESTED = 'AUTHEN_REQUESTED'
const AUTHEN_SUCCEEDED = 'AUTHEN_SUCCEEDED'
const AUTHEN_FAILED = 'AUTHEN_FAILED'

const AUTHEN_LOGOUT = 'AUTHEN_LOGOUT'

const initialState = {
  isLoading: false,
  token: '',
  userId: '',
  error: ''
}

const reducer = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case AUTHEN_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case AUTHEN_SUCCEEDED:
      const { idToken, localId } = action.data
      return {
        ...state,
        isLoading: false,
        token: idToken,
        userId: localId,
        error: ''
      }
    case AUTHEN_FAILED:
      const { response } = action.error
      return {
        ...state,
        isLoading: false,
        token: '',
        userId: '',
        error: response.data.error.message
      }
    case AUTHEN_LOGOUT:
      return {
        ...state,
        token: '',
        userId: '',
        error: ''
      }
    default:
      return state
  }
}
export default reducer

// action creators
export const authRequest = (email, password) => ({
  type: AUTHEN_REQUESTED,
  payload: {
    email,
    password
  }
})

export const authLogout = () => {
  localStorage.removeItem('token')
  return {
    type: AUTHEN_LOGOUT
  }
}

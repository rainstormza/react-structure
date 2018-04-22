import { combineReducers } from 'redux'
import login from '../features/Login/redux'
import home from '../features/Home/redux'

export default combineReducers({
  login,
  home
})

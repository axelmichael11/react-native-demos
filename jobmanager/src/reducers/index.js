import {combineReducers} from 'redux'
import AuthReducer from './authreducer.js'
import NavReducer from './navreducer.js'

export default combineReducers({
  auth:AuthReducer,
  nav: NavReducer,
})

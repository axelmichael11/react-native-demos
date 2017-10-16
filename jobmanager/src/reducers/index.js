import {combineReducers} from 'redux'
import AuthReducer from './authreducer.js'

export default combineReducers({
  auth:AuthReducer,
})

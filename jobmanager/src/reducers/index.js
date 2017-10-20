import {combineReducers} from 'redux'
import AuthReducer from './authreducer.js'
import NavReducer from './navreducer.js'
import EmployeeFormReducer from './employeeformreducer.js'

export default combineReducers({
  auth:AuthReducer,
  nav: NavReducer,
  employeeForm:EmployeeFormReducer,
})

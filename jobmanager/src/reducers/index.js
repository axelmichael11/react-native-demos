import {combineReducers} from 'redux'
import AuthReducer from './authreducer.js'
import NavReducer from './navreducer.js'
import EmployeeFormReducer from './employeeformreducer.js'
import EmployeeListReducer from './employeelistreducer.js'


export default combineReducers({
  auth:AuthReducer,
  nav: NavReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeListReducer,
})

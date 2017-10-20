import {
  EMPLOYEE_UPDATE
} from './types.js'
export const employeeUpdate = ({prop, value}) => {
  return {
    type:'employee_update',
    payload: {prop, value}
  }
}

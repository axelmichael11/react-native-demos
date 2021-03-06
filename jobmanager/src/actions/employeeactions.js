import firebase from 'firebase'
import { NavigationActions } from 'react-navigation';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
} from './types.js'


export const employeeUpdate = ({prop, value}) => {
  return {
    type:EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
}

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name,phone,shift})
    .then(()=>{
      dispatch({type: EMPLOYEE_CREATE})
      dispatch(NavigationActions.navigate({routeName: 'Employees'}))
    })
  }
}

export const employeeFetch = () => {
  const {currentUser} = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
}

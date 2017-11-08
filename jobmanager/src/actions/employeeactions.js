import firebase from 'firebase'
import { NavigationActions } from 'react-navigation';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types.js'


export const employeeUpdate = ({prop, value}) => {
  return {
    type:EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
}

export const employeeFormFill = (employees) => {
  console.log('employees object on the action!!', employees);
  return {
    type: 'employee_form_fill',
    payload: employees
  }
}

export const employeeClearForm = () => {
  return {
    type: 'employee_clear_form',
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


export const employeeSave = (employeeInfo) => {

  const { currentUser } = firebase.auth();
  console.log('CURRENT USER INFO',currentUser, 'this is the employee INFFOOOOO',employeeInfo);
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${employeeInfo.uid}`)
      .set({name: employeeInfo.name, phone:employeeInfo.phone, shift: employeeInfo.shift})
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        dispatch(NavigationActions.navigate({routeName: 'Employees'}))
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};

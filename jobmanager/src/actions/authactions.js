import firebase from 'firebase'


import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from './types'


import { NavigationActions } from 'react-navigation';



export const emailChanged = (text) => {
  return {
    type:'email_changed',
    payload: text
  }
}


export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  }
}

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user =>{
      loginUserSuccess(dispatch, user)
      dispatch(NavigationActions.navigate({routeName:'Employees'}))
    })
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user=>{
        loginUserSuccess(dispatch, user)
        dispatch(NavigationActions.navigate({routeName:'Employees'}))
      })
      .catch(()=>loginUserFail(dispatch))
    })
  }
}


export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type:LOGIN_USER_SUCCESS,
    payload:user,
  })
}


export const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL})
}

import { NavigationActions } from 'react-navigation';

export const addEmployee = (dispatch) => {
  return (dispatch) => {
    dispatch({type: 'add_employee'})
    dispatch(NavigationActions.navigate({routeName: 'Create'}))
  }
}


export const editEmployee = (name, phone, shift) => {
  return (dispatch) => {
    dispatch({type: 'add_employee'})
    dispatch(NavigationActions.navigate({routeName: 'Create', params:{name, phone, shift}}))
  }
}

import { NavigationActions } from 'react-navigation';

export const createEmployee = (dispatch) => {
  return (dispatch) => {
    // dispatch({type: 'add_employee'})
    dispatch(NavigationActions.navigate({routeName: 'Create'}))
  }
}


export const createEmployee = (dispatch) => {
  return (dispatch) => {
    // dispatch({type: 'add_employee'})
    dispatch(NavigationActions.navigate({routeName: 'Create'}))
  }
}

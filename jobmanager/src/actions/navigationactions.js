import { NavigationActions } from 'react-navigation';

export const addEmployee = (employee) => {
  return (dispatch) => {
    dispatch({type: 'add_employee'})
    dispatch(NavigationActions.navigate({routeName: 'Create', params: {employee} }))
  }
}

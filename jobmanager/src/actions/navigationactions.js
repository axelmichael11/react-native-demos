import { NavigationActions } from 'react-navigation';

export const addEmployee = (dispatch) => {
  return (dispatch) => {
    dispatch({type: 'add_employee'})
    dispatch(NavigationActions.navigate({routeName: 'Create'}))
  }
}


export const editEmployee = (employees) => {
  return (dispatch) => {
    dispatch({type: 'edit_employee'})
    dispatch(NavigationActions.navigate({routeName:"Create", params:{employees}
    }))
  }
}

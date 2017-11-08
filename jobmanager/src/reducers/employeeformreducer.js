import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone:'',
  shift:'',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case 'employee_form_fill':
    console.log('this is the STATE OF THE REDUCER..',{...state, ...action.payload});
    // const {name, phone, shift} = action.payload
    return {...state, ...action.payload}

    case 'employee_clear_form':
    return INITIAL_STATE


    case EMPLOYEE_UPDATE:
    console.log('this is the STATE OF THE REDUCER..',{...state, [action.payload.prop]: action.payload.value});
      return {...state, [action.payload.prop]: action.payload.value}

    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;

    case EMPLOYEE_CREATE:
      return INITIAL_STATE
    default:
      return state
  }
}

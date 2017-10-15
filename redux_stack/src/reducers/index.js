import {combineReducers} from 'redux'
import LibraryReducer from './library_reducer.js'
import SelectionReducer from './selection_reducer.js'

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
})

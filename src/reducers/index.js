import { combineReducers } from 'redux';
import tableReducer from './table_reducer'

// In redux this is where we combine the states

export default combineReducers({
    table: tableReducer,
})
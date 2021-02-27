import {combineReducers} from 'redux';
import ListReducer from './List/ListReducer';
var rootReducer = combineReducers({
    list: ListReducer,
})
export default rootReducer;
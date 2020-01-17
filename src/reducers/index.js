import { combineReducers } from 'redux';
import userSelectionsReducer from './userSelectionsReducer';

export default combineReducers({
    userSelections: userSelectionsReducer
});
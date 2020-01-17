import { combineReducers } from 'redux';
import selectActionReducer from './selectActionReducer';

export default combineReducers({
    selectActionReducer: selectActionReducer
});
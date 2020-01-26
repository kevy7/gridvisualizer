import { combineReducers } from 'redux';
import selectActionReducer from './selectActionReducer';
import selectGridReducer from './selectGridReducer';

export default combineReducers({
    userAction: selectActionReducer,
    selectedGrids: selectGridReducer
});
import { combineReducers } from 'redux';
import selectActionReducer from './selectActionReducer';
import selectGridReducer from './selectGridReducer';
import selectAlgoReducer from './selectAlgoReducer';

export default combineReducers({
    userAction: selectActionReducer,
    selectedGrids: selectGridReducer,
    selectedAlgo: selectAlgoReducer
});
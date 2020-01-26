//import actions here
import { SELECT_ACTION } from '../actions/types';

const initialState = {
    userAction: "fa fa-play node-icon" //For now, this will be our default action
}

const selectActionReducer = (state = initialState, action) => {
    if(action.type === SELECT_ACTION){
        return {
            ...state,
            userAction: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default selectActionReducer;


//THIS ACTION WILL NOT WORK AND SHOULD BE DEPLETED
import { IS_HOVER } from "../actions/types";

const initialState = {
    isHover: false
}

const isHoverReducer = (state=initialState, action) => {
    if(action.type === IS_HOVER){
        return {
            ...state,
            isHover: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default isHoverReducer;

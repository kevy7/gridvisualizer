import { SELECT_START_GRID, SELECT_END_GRID } from '../actions/types';
import { identifier } from '@babel/types';

let initialState = {
    startingGrid: {},
    endingGrid: {}
}

const selectGridReducer = (state=initialState, action) => {
    if(action.type === SELECT_START_GRID){
        return {
            ...state,
            startingGrid: action.payload,
        }
    }
    else if (action.type === SELECT_END_GRID){
        return {
            ...state,
            endingGrid: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default selectGridReducer;
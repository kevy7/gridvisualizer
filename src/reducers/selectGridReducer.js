import { SELECT_START_GRID, SELECT_END_GRID, RESET_SELECTED_GRIDS } from '../actions/types';
import { identifier } from '@babel/types';

let initialState = {
    startingGrid: {},
    endingGrid: {},
    startingSelected: false,
    endingSelected: false
}

const selectGridReducer = (state=initialState, action) => {
    if(action.type === SELECT_START_GRID){
        return {
            ...state,
            startingGrid: action.payload,
            startingSelected: true
        }
    }
    else if (action.type === SELECT_END_GRID){
        return {
            ...state,
            endingGrid: action.payload,
            endingSelected: true
        }
    }
    else if (action.type === RESET_SELECTED_GRIDS){
        return {
            ...state,
            startingGrid: {},
            endingGrid: {},
            startingSelected: false,
            endingSelected: false
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default selectGridReducer;
import { SELECT_ALGO } from '../actions/types';
import { BFS } from '../userAlgo/userAlgo';

let initialState = {
    selectedAlgo: BFS
}

const selectAlgoReducer = (state=initialState, action) => {
    if(action.type === SELECT_ALGO){
        return {
            ...state,
            selectedAlgo: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default selectAlgoReducer;
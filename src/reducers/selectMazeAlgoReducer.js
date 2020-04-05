import { SELECT_MAZE_ALGO } from "../actions/types";

initialState = {
    mazeAlgorithem: ""
}

//action.type
//action.payload

const selectMazeAlgoReducer = (state=initialState, action) => {
    if(action.type === SELECT_MAZE_ALGO){
        return {
            ...state,
            mazeAlgorithem: action.payload
        }
    } else {
        return {
            ...state
        }
    }
}

export default selectMazeAlgoReducer;
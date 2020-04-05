import { SELECT_MAZE_ALGO } from "../actions/types";
import { RecursiveDivision } from "../userAlgo/userAlgo";

let initialState = {
    mazeAlgorithem: RecursiveDivision //Defaults to recursive division algorithm
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
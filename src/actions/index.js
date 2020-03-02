import {
    SELECT_ACTION,
    SELECT_START_GRID,
    SELECT_END_GRID,
    RESET_SELECTED_GRIDS,
    SELECT_ALGO,
    IS_HOVER
} from './types';

import { 
    selectStartNode, 
    selectEndNode,
    selectTraffic
} from '../userActions/userActions'; //This is related to the user's actions
import { bool } from 'prop-types';

//select the type of action that the user wants
export const selectAction = (userAction) => dispatch => {
    //If there is something in the user action, then pass it on
    if(userAction){
      dispatch({
          type: SELECT_ACTION,
          payload: userAction
      });  
    }
}  

//action used to select starting or end grid
export const selectGrid = (selectGridData) => dispatch => {
    /*  

        {
            userAction: 
            selectedGrid: //This is either the starting or end grid,
            isSelected: boolean
        }

    */

    if(selectGridData.userAction === selectStartNode){
        dispatch({
            type: SELECT_START_GRID,
            payload: selectGridData.selectedGrid
        });
    }
    else if (selectGridData.userAction === selectEndNode){
        dispatch({
            type: SELECT_END_GRID,
            payload: selectGridData.selectedGrid
        });
    }


}

//action used to reset selected starting and ending grids
export const resetSelectedGrids = () => dispatch => {
    dispatch({
        type: RESET_SELECTED_GRIDS
    })
}

//action used to select Algorithm
export const selectAlgorithm = (algorithm) => dispatch => {
    dispatch({
        type: SELECT_ALGO,
        payload: algorithm
    })
}

export const isHoverAction = (boolValue) => dispatch => {
    dispatch({
        type: IS_HOVER,
        payload: boolValue
    })
}
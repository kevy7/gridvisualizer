import {
    SELECT_ACTION
} from './types';

import { selectStartNode } from '../userActions/userActions'; //This is related to the user's actions

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
export const selectGrid = (selectGridAction) => dispatch => {
    /*  

        {
            userAction: 
            selectedGrid: //This is either the starting or end grid
        }

    */
}
import {
    SELECT_ACTION
} from './types';

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


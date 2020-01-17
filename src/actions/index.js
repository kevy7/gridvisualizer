import {
    SELECT_ACTION
} from './types';

export const selectAction = (userAction) => dispatch => {
    //If there is something in the user action, then pass it on
    if(userAction){
      dispatch({
          type: SELECT_ACTION,
          payload: userAction
      });  
    }
}  
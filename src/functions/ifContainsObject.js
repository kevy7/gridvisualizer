/*
    Purpose of this function. It will take in an array and object. If the object is already within the array
    then output it as true and stop the function.
*/
const ifContainsObject = (arrayObjects, objectVal) => {
    var ifContains = false;

    /*

        object should contain the following

        object = {
            row: row,
            column: column
        }

    */

    for(var a = 0; a < arrayObjects.length; a++){
        if(arrayObjects[a].row === objectVal.row 
        && arrayObjects[a].column === objectVal.column){
            ifContains = true;
        }
    }

    //return true if array contains the object
    return ifContains;

}

export default ifContainsObject;
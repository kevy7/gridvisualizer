/*
    Purpose of this function. It will take in an array and object. If the object is already within the array
    then output it as true and stop the function.
*/
const ifContainsObject = (arrayObjects, objectVal) => {
    let ifContains = false;

    /*

        object should contain the following

        object = {
            row: row,
            column: column
        }

    */

    for(var a = 0; a < ArrayObjects; a++){
        if(arrayObjects[a].row === objectVal.row 
        && arrayObjects[a].column === objectVal.column){
            console.log("this returns as true");
            ifContains = true;
            break;
        }
    }

    return ifContains;
}

export default ifContainsObject;
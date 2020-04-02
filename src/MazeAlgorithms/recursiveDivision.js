
const recursiveDivision = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

    let mazeWalls = [];
    let vertical = "vertical";
    let horizantal = "horizontal";
    let orientation;
    let fieldWidth = maxWidth - minWidth;
    let fieldHeight = maxHeight - minHeight;

    console.log("minWidth " + minWidth);
    console.log("maxWidth " + maxWidth);
    console.log("minHeight " + minHeight);
    console.log("maxHeight " + maxHeight);
    console.log("fieldWidth " + fieldWidth);
    console.log("fieldHeight " + fieldHeight);

    //Assign orientation
    //if width is greater than height, we bisect vertically
    if(fieldWidth > fieldHeight){
        orientation = vertical;
    }
    else if(fieldWidth < fieldHeight){
        orientation = horizantal;
    }
    //console.log(orientation);

    //base case for recursive function
    //We may need to fix this later
    if(fieldWidth <2 || fieldHeight <2){
        return mazeWalls;
    }
    let selectableColumns = []; //the list of columns that we can choose and select to be a wall
        let openingRows = []; //List of rows that we're allowed to select to be an opening
        let randomColumnIdx;
        let randomRowIdx;
        let selectedColumn;
        let selectedOpeningRow;

        //add list of selectable columns into the array
        for(let a = minWidth; a <= maxWidth; a+=2){
            selectableColumns.push(a);
        }

        //add list of selectable opening rows into the array
        for(let b = minHeight-1; b <= maxHeight+1; b+=2){
            openingRows.push(b);
        }

        console.log("selectableColumns")
        console.log(selectableColumns);
        console.log("openingRows");
        console.log(openingRows);

    if(orientation === vertical){
        let selectableColumns = []; //the list of columns that we can choose and select to be a wall
        let openingRows = []; //List of rows that we're allowed to select to be an opening
        let randomColumnIdx;
        let randomRowIdx;
        let selectedColumn;
        let selectedOpeningRow;

        //add list of selectable columns into the array
        for(let a = minWidth; a <= maxWidth; a+=2){
            selectableColumns.push(a);
        }

        //add list of selectable opening rows into the array
        for(let b = minHeight-1; b <= maxHeight+1; b+=2){
            openingRows.push(b);
        }

        console.log(selectableColumns);
        console.log(openingRows);

        randomColumnIdx = Math.floor(Math.random() * selectableColumns.length);
        randomRowIdx = Math.floor(Math.random() * openingRows.length);

        selectedColumn = selectableColumns[randomColumnIdx];
        selectedOpeningRow = openingRows[randomRowIdx];

        console.log(selectedColumn);
        console.log(selectedOpeningRow);

        let trueMinHeight = minHeight - 1; //Subtract by one to get our actual minHeight
        let trueMaxHeight = maxHeight + 1;

        console.log("trueMinHeight: " + trueMinHeight);
        console.log("trueMaxHeight: " + trueMaxHeight);

        for(let a = trueMinHeight; a <= trueMaxHeight; a++){
            if(a === selectedOpeningRow){continue}
            mazeWalls.push({
                row: a,
                column: selectedColumn
            });
            grid[a][selectedColumn].isWall = true;
            
        }

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, selectedColumn-2, minHeight, maxHeight));
        //mazeWalls = mazeWalls.concat(recursiveDivision(grid, selectedColumn+2, maxWidth, minHeight, maxHeight));
        


    }
    else if(orientation === horizantal){
        let selectableRows = [];
        let openingColumn = [];
        let randomColumnIdx;
        let randomRowIdx;
        let selectedRow;
        let selctedOpeningColumn;

        console.log("minWidth: " + minWidth);
        console.log("maxWidth: " + maxWidth);

        for(let a = minHeight; a <=maxHeight; a+=2){
            selectableRows.push(a);
        }

        for(let b = minWidth-1; b <= maxWidth+1; b+=2){
            openingColumn.push(b);
        }

        console.log("selectableRows: " + selectableRows);
        console.log("openingColumn: " + openingColumn);


        /*

        randomColumnIdx = Math.floor(Math.random() * selectableColumns.length);
        randomRowIdx = Math.floor(Math.random() * openingRows.length);

        */


    }
    



    return mazeWalls;



    //OLD CODE
    /*
    //This is going to be our helper function, we will create a recursive function, that will add walls into the array below
    let mazeWalls = []; //Set this as an empty array for now
    let vertical = "vertical";
    let horizantal = "horizontal";
    let selectedNumber;
    let opening;
    let fieldWidth = maxWidth - minWidth;
    let fieldHeight = maxHeight - minHeight;

    //select orientation
    let orientation;


    //This function needs to be fixed
    if(fieldWidth <= 4 || fieldHeight <= 4 || fieldWidth === undefined || fieldHeight === undefined){
        console.log("reject recursion");
        console.log(mazeWalls);
        return mazeWalls;
    }

    //orientation will be based on the height and width of the grid
    if(fieldWidth > fieldHeight){ //original: maxWidth > maxHeight //fieldWidth > fieldHeight
        orientation = vertical;
    }
    else if(fieldWidth < fieldHeight){ //maxWidth < maxHeight //fieldWidth < fieldHeight
        orientation = horizantal;
    }
    else {
        orientation = horizantal;
    }

    */

    
    //Select random row or column based on orientation
    /*
    if(orientation === vertical){



        //Old code will be placed here
        //Run test codes here
        let trueMinHeight = minHeight - 1;
        let trueMaxHeight = maxHeight;

        //Everything is dependent on this function here
        selectedNumber = generateRandomNum(minWidth+1, maxWidth-2); //<--- this is too static, the minWidth needs to be determined
        console.log("min Column: " + (minWidth+1))
        console.log("max Column: " + (maxWidth-2))
        console.log("selected Column: " + selectedNumber);

        while(grid[trueMinHeight][selectedNumber].isWall === false ||
            grid[trueMaxHeight][selectedNumber].isWall === false    
        ){
            console.log("re-do executed");
            console.log("re-selected Column: " + selectedNumber);
            selectedNumber = generateRandomNum(minWidth+1, maxWidth+2);
            
        }
        
        //We will select a random row to be our opening
        opening = generateRandomNum(minHeight+1, maxHeight-1); //Opening cannot be the top wall or bottom wall. 

        //Do something if the selected number is 

        for(var a = minHeight; a < maxHeight; a++){
            if(a ===opening){
                continue;
            }
            mazeWalls.push({
                row: a,
                column: selectedNumber
            });
            grid[a][selectedNumber].isWall = true;
        }
        //console.log("selected column: " + selectedNumber);
        console.log("opening num: " + opening);
        console.log("minWidth " + minWidth);
        console.log("maxWidth " + selectedNumber);
        console.log("minHeight " + minHeight);
        console.log("maxHeight " + maxHeight);
        console.log(" ");

        console.log("minWidth " + (selectedNumber+1));
        console.log("maxWidth " + maxWidth);
        console.log("minHeight " + minHeight);
        console.log("maxHeight " + maxHeight);
        console.log(" ");

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, selectedNumber, minHeight, maxHeight)); //for this function, the maxHeight is not passing in correctly

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, selectedNumber+1, maxWidth, minHeight, maxHeight)); //this should work
        
    }

    else if (orientation === horizantal){

        let trueMinWidth = minWidth - 1;
        let trueMaxWidth = maxWidth;
        selectedNumber = generateRandomNum(minHeight+1, maxHeight-2); //We add and minus 1 to make sure that we're not selecting the outer walls
        console.log("min height: " + (minHeight+1));
        console.log("max height: " + (maxHeight-2));
        console.log("selected Row: " + selectedNumber)
        while(
            grid[selectedNumber][trueMinWidth].isWall === false ||
            grid[selectedNumber][trueMaxWidth].isWall === false
            
        ){
            //Re-select a random number until it's parents are not walls
            console.log("re-do executed") //this is being executed multiple times
            console.log("selected Row: " + selectedNumber);
            selectedNumber = generateRandomNum(minHeight+1, maxHeight-2);
        }

        opening = generateRandomNum(minWidth+1, maxWidth-1);

        for(var b = minWidth; b < maxWidth; b++){
            if(b === opening){
                continue;
            }
            mazeWalls.push({
                row: selectedNumber,
                column: b
            })
            grid[selectedNumber][b].isWall = true;
        }


        console.log("selected row: " + selectedNumber);
        console.log("opening num: " + opening);
        console.log("minWidth " + minWidth);
        console.log("maxWidth " + maxWidth);
        console.log("minHeight " + (selectedNumber+1));
        console.log("maxHeight " + maxHeight);
        console.log(" ");

        console.log("minWidth " + minWidth);
        console.log("maxWidth " + maxWidth);
        console.log("minHeight " + minHeight);
        console.log("maxHeight " + selectedNumber);

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, selectedNumber+1, maxHeight)); //this is currently not working

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, minHeight, selectedNumber)); //this works


    }
    */

    //return mazeWalls;



}

//function used to generate a random number for us
const generateRandomNum = (min, max, opening) => {

    let randomNumber = Math.random() * (max - min) + min;

    while(randomNumber === opening){
        //re-execute code if the random number is equal to the opening number
        randomNumber = Math.random() * (max - min) + min;
    }

    return Math.floor(randomNumber);

}


const selectWall = (min, max, grid) => {
    
}

export default recursiveDivision;
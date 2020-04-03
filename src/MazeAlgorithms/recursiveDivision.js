
const recursiveDivision = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

    let mazeWalls = [];
    let vertical = "vertical";
    let horizantal = "horizontal";
    let orientation;
    let fieldWidth = (maxWidth - minWidth)+3;
    let fieldHeight = (maxHeight - minHeight)+3;

    //Assign orientation
    //if width is greater than height, we bisect vertically
    if(fieldWidth > fieldHeight){
        orientation = vertical;
    }
    else if(fieldWidth < fieldHeight){
        orientation = horizantal;
    }
    else {
        orientation = horizantal;
    }
    //console.log(orientation);

    //base case for recursive function
    //We may need to fix this later
    if(fieldWidth <=2 || fieldHeight <=2){
        console.log(" ");
        /* console.log("minWidth " + minWidth);
        console.log("maxWidth " + maxWidth);
        console.log("minHeight " + minHeight);
        console.log("maxHeight " + maxHeight);
        console.log("fieldWidth " + fieldWidth);
        console.log("fieldHeight " + fieldHeight); */
        console.log("reject");
        return mazeWalls;
    }

    if(orientation === vertical){
        let selectableColumns = []; //the list of columns that we can choose and select to be a wall
        let openingRows = []; //List of rows that we're allowed to select to be an opening
        let randomColumnIdx;
        let randomRowIdx;
        let selectedColumn;
        let selectedOpeningRow;
        console.log("_____");
        console.log("Vertical Code");
        console.log("_____");

        //add list of selectable columns into the array
        for(let a = minWidth; a <= maxWidth; a+=2){
            selectableColumns.push(a);
        }

        //add list of selectable opening rows into the array
        for(let b = minHeight-1; b <= maxHeight+1; b+=2){
            openingRows.push(b);
        }

        randomColumnIdx = Math.floor(Math.random() * selectableColumns.length);
        randomRowIdx = Math.floor(Math.random() * openingRows.length);

        selectedColumn = selectableColumns[randomColumnIdx];
        selectedOpeningRow = openingRows[randomRowIdx];

        let trueMinHeight = minHeight - 1; //Subtract by one to get our actual minHeight
        let trueMaxHeight = maxHeight + 1;

        for(let a = trueMinHeight; a <= trueMaxHeight; a++){
            if(a === selectedOpeningRow){continue}
            mazeWalls.push({
                row: a,
                column: selectedColumn
            });
            grid[a][selectedColumn].isWall = true;
            
        }

        console.log("____");
        console.log("Division");

        console.log("minWidth: " + minWidth);
        console.log("maxWidth: " + (selectedColumn + 2) );
        console.log("minHeight: " + minHeight);
        console.log("minHeight: " + maxHeight);

        console.log("____");
        console.log("minWidth: " + (selectedColumn + 2) );
        console.log("maxWidth: " + maxWidth );
        console.log("minHeight: " + minHeight);
        console.log("minHeight: " + maxHeight);

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, selectedColumn-2, minHeight, maxHeight));
        mazeWalls = mazeWalls.concat(recursiveDivision(grid, selectedColumn+2, maxWidth, minHeight, maxHeight));
        


    }
    else if(orientation === horizantal){
        let selectableRows = [];
        let openingColumn = [];
        let randRowIdx;
        let randColumnIdx;
        let selectedRow;
        let selectedOpeningColumn;

        for(let a = minHeight; a <=maxHeight; a+=2){
            selectableRows.push(a);
        }

        for(let b = minWidth-1; b <= maxWidth+1; b+=2){
            openingColumn.push(b);
        }

        randRowIdx = Math.floor(Math.random() * selectableRows.length);
        randColumnIdx = Math.floor(Math.random() * openingColumn.length);

        selectedRow = selectableRows[randRowIdx];
        selectedOpeningColumn = openingColumn[randColumnIdx];

        let trueMinWidth = minWidth - 1;
        let trueMaxWidth = maxWidth + 1;

        console.log(selectedOpeningColumn);

        for(let a = trueMinWidth; a <= trueMaxWidth; a++){
            if(a === selectedOpeningColumn){continue}
            grid[selectedRow][a].isWall = true;
            mazeWalls.push({
                row: selectedRow,
                column: a
            });
        }
        console.log("selected row: " + selectedRow);

        console.log("____");
        console.log("Division");

        console.log("minWidth: " + minWidth);
        console.log("maxWidth: " + maxWidth);
        console.log("minHeight: " + minHeight);
        console.log("maxHeight: " + (selectedRow+2));
        console.log("_______");

        console.log("minWidth: " + minWidth);
        console.log("maxWidth: " + maxWidth);
        console.log("minHeight: " + (selectedRow+2));
        console.log("maxHeight: " + maxHeight);

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, minHeight, selectedRow-2));
        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, selectedRow+2, maxHeight));
        

    }
    
    return mazeWalls;

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
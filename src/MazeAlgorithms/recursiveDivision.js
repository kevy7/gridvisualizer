
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
    //if width is greater than height, we disect vertically
    if(fieldWidth > fieldHeight){
        orientation = vertical;
    }
    else if(fieldWidth < fieldHeight){
        orientation = horizantal;
    }
    else {
        orientation = horizantal;
    }

    //base case for recursive function
    if(fieldWidth <=2 || fieldHeight <=2){
        return mazeWalls;
    }

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
            //grid[a][selectedColumn].isWall = true;
            
        }

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

        for(let a = trueMinWidth; a <= trueMaxWidth; a++){
            if(a === selectedOpeningColumn){continue}
            //grid[selectedRow][a].isWall = true;
            mazeWalls.push({
                row: selectedRow,
                column: a
            });
        }

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, minHeight, selectedRow-2));
        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, selectedRow+2, maxHeight));
        
    }
    
    return mazeWalls;

}

export default recursiveDivision;
const setOuterWalls = (grid, width, height) => {
    //This is going to be our helper function, we will create a recursive function, that will add walls into the array below
    let mazeWalls = []; //Set this as an empty array for now

    //First of wall, execute a function that will loop through all the outer edges of your current graph and display them as walls
    //push columns
    for (var a = 0; a < width; a ++){
        //This code works
        mazeWalls.push({
            row: 0,
            column: a
        });
        mazeWalls.push({
            row: height-1,
            column: a
        });
    }

    //push rows
    for (var b = 1; b < height; b++){
        mazeWalls.push({
            row: b,
            column: 0
        });
        mazeWalls.push({
            row: b,
            column: width-1
        })
    }

}
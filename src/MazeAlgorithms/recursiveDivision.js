
const recursiveDivision = (grid, width, height, orientation) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

    //This is going to be our helper function, we will create a recursive function, that will add walls into the array below
    let mazeWalls = []; //Set this as an empty array for now

    //First of wall, execute a function that will loop through all the outer edges of your current graph and display them as walls

    //push columns
    for (var a = 0; a < width; a ++){
        mazeWalls.push({
            row: 0,
            column: a
        });
        mazeWalls.push({
            row: height,
            column: a
        });
    }

    //push rows
    for (var b = 1; b < width; b++){
        mazeWalls.push({
            row: b,
            column: 0
        });
        mazeWalls.push({
            row: b,
            column: width
        })
    }




    return mazeWalls;


}

export default recursiveDivision;
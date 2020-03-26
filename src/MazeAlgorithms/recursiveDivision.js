
const recursiveDivision = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

    console.log("executed function");

    //This is going to be our helper function, we will create a recursive function, that will add walls into the array below
    let mazeWalls = []; //Set this as an empty array for now
    let vertical = "vertical";
    let horizantal = "horizontal";
    let selectedNumber;
    let opening;

    //select orientation
    let orientation;

    //orientation will be based on the height and width of the grid
    if(maxWidth > maxHeight){
        orientation = vertical;
    }
    else if(maxWidth < maxHeight){
        orientation = horizantal;
    }
    else {
        orientation = horizantal;
    }

    console.log(orientation);
    console.log("maxWidth" + maxWidth);
    console.log("maxHeight" + maxHeight);
    console.log(" ");
    
    //Select random row or column based on orientation
    if(orientation === vertical){
        //select our column, which is the same as our width
        selectedNumber = generateRandomNum(minWidth+1, maxWidth-1); //<--- this is too static, the minWidth needs to be determined
        opening = generateRandomNum(minHeight, maxHeight-1);
        //console.log(opening);
        console.log(selectedNumber);
        console.log(" ");

        //Do something if the selected number is 

        for(var a = minHeight; a < maxHeight; a++){
            if(a ===opening){
                continue;
            }
            mazeWalls.push({
                row: a,
                column: selectedNumber
            });
        }
        
        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, selectedNumber, minHeight, maxHeight));
    }
    else if (orientation === horizantal){
        selectedNumber = generateRandomNum(minHeight+1, maxHeight-1);
        opening = generateRandomNum(minWidth, maxWidth-1);

        for(var b = minWidth; b < maxWidth; b++){
            if(b === opening){
                continue;
            }
            mazeWalls.push({
                row: selectedNumber,
                column: b
            })
        }
    }




    return mazeWalls;


}

//function used to generate a random number for us
const generateRandomNum = (min, max) => {

    let randomNumber = Math.random() * (max - min) + min;

    return Math.floor(randomNumber);

}

export default recursiveDivision;
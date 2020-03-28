
const recursiveDivision = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

    console.log(" ");
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

    if(maxWidth < 2 || maxHeight < 2){
        return;
    }

    /* console.log(orientation);
    console.log("minWidth " + minWidth);
    console.log("maxWidth " + maxWidth);
    console.log("minHeight " + minHeight);
    console.log("maxHeight " + maxHeight);
    console.log(" "); */
    
    //Select random row or column based on orientation
    if(orientation === vertical){
        //select our column, which is the same as our width
        console.log("minw " + minWidth);
        console.log("maxw " + maxWidth);
        //console.log("minHeight " + minHeight);
        //console.log("maxHeight " + maxHeight);




        //Run test codes here
        let trueMinHeight = minHeight - 1;
        let trueMaxHeight = maxHeight;


        /*

        essentially, if the [minHeight][selectedNumber].isWall = false, then do not select the selectedNumber
        or if the [maxHeight][selectedNumber].isWall = false, then do not select the selectedNumber as well, there should be a function for this

        */

        console.log("actual minHeight: " + trueMinHeight);
        console.log("actual maxHeight: " + trueMaxHeight);




        //Everything is dependent on this function here
        selectedNumber = generateRandomNum(minWidth+1, maxWidth-1); //<--- this is too static, the minWidth needs to be determined

        //While the selected column's min and max height's are not walls, re-select another random number

        console.log(grid[trueMinHeight][selectedNumber]);
        console.log(grid[trueMaxHeight][selectedNumber]);
        
        //console.log(grid[trueMaxHeight][selectedNumber]);

        while(grid[trueMinHeight][selectedNumber].isWall === false ||
            grid[trueMaxHeight][selectedNumber].isWall === false    
        ){
            console.log("REDOOOOOOOO")
            selectedNumber = generateRandomNum(minWidth, maxWidth);
        }
        



        
        
        //We will select a random row to be our opening
        opening = generateRandomNum(minHeight+1, maxHeight-1); //Opening cannot be the top wall or bottom wall. 
        //console.log(opening);
        console.log("opening: " + opening);

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
        
        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, selectedNumber, minHeight, maxHeight));
    }
    else if (orientation === horizantal){

        console.log("minWidth " + minWidth);
        console.log("maxWidth " + maxWidth);

        let trueMinWidth = minWidth - 1;
        let trueMaxWidth = maxWidth;

        console.log("true minWidth " + trueMinWidth);
        console.log("true maxWidth " + trueMaxWidth);

        selectedNumber = generateRandomNum(minHeight+1, maxHeight-1); //We add and minus 1 to make sure that we're not selecting the outer walls

        console.log(grid[selectedNumber][trueMinWidth]);
        console.log(grid[selectedNumber][trueMaxWidth]);

        while(
            grid[selectedNumber][trueMinWidth].isWall === false ||
            grid[selectedNumber][trueMaxWidth].isWall === false
        ){
            //Re-select a random number until it's parents are not walls
            console.log("REDOOOOOOOO");
            selectedNumber = generateRandomNum(minHeight+1, maxHeight-1);
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

        //When we just got done dividing horizontally, our min and max height should be the following
        /*
            opening number -> min
            maxHeight -> height

            minHeight -> min
            openingNumber -> height

        */

        mazeWalls = mazeWalls.concat(recursiveDivision(grid, minWidth, maxWidth, minHeight, maxHeight));


    }




    return mazeWalls;


}

//function used to generate a random number for us
const generateRandomNum = (min, max, opening) => {

    let randomNumber = Math.random() * (max - min) + min;

    while(randomNumber === opening){
        //re-execute code if the random number is equal to the opening number
        console.log("this was executed");
        randomNumber = Math.random() * (max - min) + min;
    }

    return Math.floor(randomNumber);

}


const selectWall = (min, max, grid) => {
    
}

export default recursiveDivision;
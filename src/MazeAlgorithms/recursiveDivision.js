
const recursiveDivision = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

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

    if(fieldWidth <= 4 || fieldHeight <= 4){
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

    console.log(" ");
    console.log("______________");
    console.log("minWidth: " + minWidth)
    console.log("maxWidth: " + maxWidth);
    console.log("minHeight: " + minHeight);
    console.log("maxHeight: " + maxHeight);
    console.log("fieldWidth: " + fieldWidth);
    console.log("fieldHeight: " + fieldHeight);
    console.log(" ");
    

    
    //Select random row or column based on orientation
    if(orientation === vertical){



        //Run test codes here
        let trueMinHeight = minHeight - 1;
        let trueMaxHeight = maxHeight;


        /*

        essentially, if the [minHeight][selectedNumber].isWall = false, then do not select the selectedNumber
        or if the [maxHeight][selectedNumber].isWall = false, then do not select the selectedNumber as well, there should be a function for this

        */




        //Everything is dependent on this function here
        selectedNumber = generateRandomNum(minWidth+1, maxWidth-1); //<--- this is too static, the minWidth needs to be determined

        //While the selected column's min and max height's are not walls, re-select another random number


        while(grid[trueMinHeight][selectedNumber].isWall === false ||
            grid[trueMaxHeight][selectedNumber].isWall === false    
        ){
            console.log("re-do executed")
            selectedNumber = generateRandomNum(minWidth+1, maxWidth+1);
            
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

        
        console.log("selected Number: " + selectedNumber);
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
        selectedNumber = generateRandomNum(minHeight+1, maxHeight-1); //We add and minus 1 to make sure that we're not selecting the outer walls
        
        while(
            grid[selectedNumber][trueMinWidth].isWall === false ||
            grid[selectedNumber][trueMaxWidth].isWall === false
            
        ){
            //Re-select a random number until it's parents are not walls
            console.log("re-do executed") //this is being executed multiple times
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


        console.log("selected Number: " + selectedNumber);
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

const recursiveDivision = (grid, width, height) => {
    //orientation determines whether we want to divide our graph horizantally or vertically first
    //width === columns
    //height === rows

    //This is going to be our helper function, we will create a recursive function, that will add walls into the array below
    let mazeWalls = []; //Set this as an empty array for now
    let vertical = "vertical";
    let horizantal = "horizontal";

    //select orientation
    let orientation;

    //orientation will be based on the height and width of the grid
    if(width > height){
        orientation = vertical;
    }
    else if(width < height){
        orientation = horizantal;
    }
    else {
        orientation = horizantal;
    }
    
    //Select random row or column based on orientation
    if(orientation === vertical){
        //select our column, which is the same as our width

        


    }











    return mazeWalls;


}

//function used to generate a random number for us
const generateRandomNum = (min, max) => {

    let randomNumber = Math.random() * (max - min) + min;

    return Math.floor(randomNumber);

}

export default recursiveDivision;
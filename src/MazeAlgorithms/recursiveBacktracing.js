const recursiveBacktracking = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //Find a way to return walls, issue is we can create paths but how would we return the walls?
    //ideally, function should stop when every node was visited
    let stack = [];
    let mazeWalls = [];
    let randomRow = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight; //Will select a random row within range
    let randomColumn = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth; //Will select a random column within range

    


    //Math.floor(Math.random() * 10-5) + 5; //Used to return a random number from 5 and 10

}

export default recursiveBacktracking;

//create a function here called get children
const getChildren = () => {

}
const recursiveBacktracking = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //Find a way to return walls, issue is we can create paths but how would we return the walls?
    //ideally, function should stop when every node was visited
    let stack = [];
    //let visited = []; //We don't need this
    let path = [];
    let randomRow = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight; //Will select a random row within range
    let randomColumn = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth; //Will select a random column within range
    let startingNode = grid[2][2]; //For now, we're always starting at this node

    /*

    node props for reference

    row: PropTypes.number,
    column: PropTypes.number,
    startRow: PropTypes.number,
    startColumn: PropTypes.number,
    isVisted: PropTypes.bool,
    isPath: PropTypes.bool,
    prevNode: PropTypes.object,
    updateState: PropTypes.func,
    isStart: PropTypes.bool,
    isEnd: PropTypes.bool,
    isWall: PropTypes.bool,
    distance: PropTypes.number,
    isWeight: PropTypes.bool,
    fValue: PropTypes.number

    */

    //Set up starting node
    startingNode.isVisited = true;
    path.push({
        row: startingNode.row,
        column: startingNode.column
    });
    stack.push(startingNode);

    //while there is something in the stack
    while(stack.length){

        let currentNode = stack.pop();
        if(currentNode.isVisited === false){
            currentNode.isVisited = true;
            path.push({
                row: currentNode.row,
                column: currentNode.column
            })
        }

        //function should continue while there is objects in the stack


        //execute getChildren function




        //When pushing children into the stack, we need to find a way to check if the children is already in the stack
        //Only push into the stack if the children is not already in there

    }






}

export default recursiveBacktracking;

//create a function here called get children
const getChildren = (node, grid, minRow, maxRow, minColumn, maxColumn) => {
    /*
        bounderies are maxRow and maxColumn
        were moving by two nodes at a time
    */


    //We're checking for two things
    //If the children nodes are within bounds of the grid
    //If the children nodes are not hitting a node that's defined as a path
    

    //Check left children

    //Check right chidlren

    //Check top chirdren

    //Check bottom children



}
const recursiveBacktracking = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //Find a way to return walls, issue is we can create paths but how would we return the walls?
    //ideally, function should stop when every node was visited
    let stack = [];
    //let visited = []; //We don't need this
    let path = [];
    //let pushedNode = {}; //Purpose of this object is to help us identify nodes that have already been pushed into the stack, if node is in stack, do not push it into it
    let randomRow = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight; //Will select a random row within range
    let randomColumn = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth; //Will select a random column within range
    let startingBegNode = grid[5][9]; //For now, we're always starting at this node
    let startingEndNode = grid[5][10]; //starting end node, this will be the first node popped off the stack

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
    startingBegNode.isVisited = true;
    startingEndNode.isVisited = true;
    //push beg node first
    path.push({
        row: startingBegNode.row,
        column: startingBegNode.column
    });
    //push end node last
    path.push({
        row: startingEndNode.row,
        column: startingEndNode.column
    })

    //Push two nodes into the stack at once
    stack.push(startingBegNode);
    stack.push(startingEndNode);

    //while there is something in the stack
    while(stack.length){

        //Remove two nodes from the stack at a time
        let currentEndNode = stack.pop();
        let currentBegNode = stack.pop(); 

        //we might need to change this condition from an and to or, if one of them is already visited then don't continue marking the two nodes as visited
        if(currentEndNode.isVisited === false || currentBegNode.isVisited === false){
            currentEndNode.isVisited = true;
            currentBegNode.isVisited = true;
            path.push({
                row: currentBegNode.row,
                column: currentBegNode.column
            })
            path.push({
                row: currentEndNode.row,
                column: currentEndNode.column
            })
        }        

        //return 2d array of childrens, 2-child nodes at a time
        let childrens = getChildren(currentEndNode, grid, minHeight, maxHeight, minWidth, maxWidth);

        //loop through each children
        for(let a = 0; a < childrens.length; a++){
            //within each children is also an array that contains two childrens, they act as a pair
            for(let b = 0; b < childrens[a].length; b++){
                //We can afford to do this double loop because there should only be 8 nodes in total, no scaling to worry about
                let child = childrens[a][b];
                console.log(child);

                let row = child.row;
                let column = child.column;

                if(grid[row][column].isVisited == true){
                    continue;
                }
                if(grid[row][column].isWall == true){
                    continue;
                }

            }
        }

        //When pushing children into the stack, we need to find a way to check if the children is already in the stack
        //Only push into the stack if the children is not already in there

    }






}

export default recursiveBacktracking;

//create a function here called get children
const getChildren = (node, grid, minRow, maxRow, minColumn, maxColumn) => {
    //grid does not need to be passed as a parameter
    /*
        bounderies are maxRow and maxColumn
        were moving by two nodes at a time
    */
    let row = node.row;
    let column = node.column;
    let childrens = [];
    let child = [];


    //We're checking for two things
    //If the children nodes are within bounds of the grid
    //If the children nodes are not hitting a node that's defined as a path
    
    if(column-2 > minColumn){

        //We need a condition here to chick if child is already visited
        //If both the nodes are not visited, then we can add them as nodes. This condition will check if we're within bound of visited nodes
        
        if(grid[row][column-1].isVisited === false && grid[row][column-2].isVisited === false){

            //empty the child array first/used to reset the array
            child = [];
            //push the beginning node first
            child.push({
                row: row,
                column: column-1
            })
            //Push the end node afterwards
            child.push({
                row: row,
                column: column-2
            })

            //push child into children
            childrens.push(child);
        }
    }

    //Check right chidlren
    if(column+2 < maxColumn){
        
        if(grid[row][column+1].isVisited === false && grid[row][column+2].isVisited === false){
            child = [];

            child.push({
                row: row,
                column: column+1
            })
            child.push({
                row: row,
                column: column+2
            })

            childrens.push(child);
        }
    }

    //Check top chirdren
    if(row-2 > minRow){
        
        if(grid[row-1][column].isVisited === false && grid[row-2][column].isVisited === false){

            child = [];
            child.push({
                row: row-1,
                column: column
            })
            child.push({
                row: row-2,
                column: column
            })
            childrens.push(child);

        }
    }

    //Check bottom children
    if(row+2 < maxRow){
        
        if(grid[row+1][column].isVisited === false && grid[row+2][column].isVisited === false){

            child = [];
            child.push({
                row: row+1,
                column: column
            })
            child.push({
                row: row+2,
                column: column
            })
            childrens.push(child);
        }
    }

    return childrens; //We will return a double array that consists of the following:
    /*

        [
            [begNode, endNode],
            [begNode, endNode]
        ]

    */

}
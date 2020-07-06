import { randomizeArray } from "../Algorithms/Algofunctions/Algofunctions";

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
    startingBegNode.isPath = true;
    startingEndNode.isPath = true;
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
        if(currentEndNode.isPath === false && currentBegNode.isPath === false){
            currentEndNode.isPath = true;
            currentBegNode.isPath = true;
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

                if(grid[child.row][child.column].isPath == true){
                    continue;
                }
                if(grid[child.row][child.column].isWall == true){
                    continue;
                }

                //push each children pair into the stack
                stack.push(grid[child.row][child.column]);

            }
        }

    }

    //We have the path here
    //Is there a way to reverse the path and set every other component as that's not a path as a wall?
    //Create a function here to create/identify walls

    //createWalls(grid);
    createWalls(grid);
    console.log("return path");
    return path;

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
        
        if(grid[row][column-1].isPath === false && grid[row][column-2].isPath === false){

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
        
        if(grid[row][column+1].isPath === false && grid[row][column+2].isPath === false){
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
        
        if(grid[row-1][column].isPath === false && grid[row-2][column].isPath === false){

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
        
        if(grid[row+1][column].isPath === false && grid[row+2][column].isPath === false){

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

    //use functiont to reverse array
    randomizeArray(childrens);

    //Is there a way to re-arrange, this array?
    return childrens; //We will return a double array that consists of the following:
    /*

        [
            [begNode, endNode],
            [begNode, endNode]
        ]

    */

}

//Once the paths is identified, the purpose of this function is to create walls based on the given path
//What's the smartest way to do this?
const createWalls = (grid) => {
    //We can loop through each node in the grid, and if a node is not a path, then make it a wall
    //If it is a path, then remove it as a path??
    let mazeWalls = [];
    
    //Is this the most efficient way to do this?
    for(let row = 1; row < grid.length-1; row++){
        for(let column = 1; column < grid[0].length-1; column++){
            //if this condition is true, then push the row and column into the mazeWalls array
            if(grid[row][column].isPath != true){
                console.log("this is a wall");
            }
        }
    }
    
}
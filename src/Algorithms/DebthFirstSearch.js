
export function DFS(grid, startRow, startCol, endRow, endCol){

    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let startingNode = grid[startRow][startCol]; //This will be our starting node
    let stack = [];
    let visited = []; //This will be an array of objects
    /*
        {
            row: rowHere,
            column: columnHere
        }
    */
    //let shortestPath = []

    /*
        Data that each node contains    

        row: row,
        column: column,
        startRow: undefined,
        startColumn: undefined,
        isVisited: false,
        isPath: false,
        prevNode: undefined,
        isStart: false,
        isEnd: false,
    */

    startingNode.isVisited = true;
    stack.push({
        row: startRow,
        column: startCol
    });

    //While there is something in our stack, execute the following code below
    while(stack.length){

        let currentNode = stack.pop(); //Remove last element of your stack and assign it to the currentNode variable

        

    }





}
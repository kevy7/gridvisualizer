

import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';


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
    visited.push({
        row: startRow,
        column: startCol
    })
    stack.push(startingNode); //Pushes the starting node into the stack

    //While there is something in our stack, execute the following code below
    while(stack.length){

        let currentNode = stack.pop(); //Remove last element of your stack and assign it to the currentNode variable
        if(currentNode.isVisited === false){
            currentNode.isVisited = true;
            visited.push({
                row: currentNode.row,
                column: currentNode.column
            });
        }

        if(endRow === currentNode.row && endCol === currentNode.column){

            //This function does not work with DFS to find the shortest path
            let shortestPath = getShortestPath(grid, grid[currentNode.row][currentNode.column]);

            return {
                shortestPath: shortestPath,
                visited: visited
            }
        }

        //Create a function to retrieve childrens
        let childrens = getChildrens(currentNode, maxRow, maxCol);

        for(var a = 0; a < childrens.length; a++){
            let row = childrens[a].row;
            let column = childrens[a].column;

            if(grid[row][column].isVisited){
                continue;
            }
            if(grid[row][column].isWall){
                continue;
            }
            
            stack.push(grid[row][column]);

            grid[row][column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }

        }
    }
}
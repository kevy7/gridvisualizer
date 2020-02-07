

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
    visited.push({
        row: startRow,
        column: startCol
    })
    stack.push(startingNode); //Pushes the starting node into the stack

    //While there is something in our stack, execute the following code below
    while(stack.length){

        let currentNode = stack.pop(); //Remove last element of your stack and assign it to the currentNode variable

        //Create a function to retrieve childrens
        let childrens = getChildrens(currentNode, maxRow, maxCol);

        for(var a = 0; a < childrens.length; a++){
            let row = childrens[a].row;
            let column = childrens[a].column;

            if(grid[row][column].isVisited === true){
                continue; //Skip this if the node is already visited
            }

            grid[row][column].isVisited = true;
            visited.push({
                row: row,
                column: column
            });

            //Assign the prevNode
            grid[row][column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }


            //Set condition to check if the currentNode matches the end Node
            if(endRow === row && endCol === column){
                //Then there is a match

                return {
                    shortestPath: {},
                    visited: visited
                }
            }


            //push your current children component into the stack
            stack.push(grid[row][column]);

        }

    }





}
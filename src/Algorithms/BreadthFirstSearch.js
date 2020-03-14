import { unwatchFile } from "fs";
import { cloneWithoutLoc } from "@babel/types";

//This is our breadth first search function
export function BFS(grid, startRow, startColumn, endRow, endColumn){

    let counter = 0;
    let maxRow = grid.length;
    let maxColumn = grid[0].length;
    let startingNode = grid[startRow][startColumn]; //this will be our starting node
    let current;
    let queue = [];
    let visited = [];

    //array.push -> push an element in front of an array
    //array.shift -> remove an element in front of an array

    //Set the startingNode isVisited to true
    startingNode.isVisited = true;
    visited.push({
        row: startRow,
        column: startColumn
    });


    queue.push(startingNode); //We're pushing our starting node into the queue

    while(queue.length){ //While there is something in the queue, do something below

        current = queue.shift(); //remove first node from queue and assign it to the current variable

        let childrens = getChildren(current, maxRow, maxColumn);

        //loop through each children and mark them as visited

        for (var a = 0; a < childrens.length; a++){
            let row = childrens[a].row;
            let column = childrens[a].column;

            if(grid[row][column].isVisited){
                continue; //skip any node that was already visited
            }

            if(grid[row][column].isWall){
                continue;
            }

            grid[row][column].isVisited = true;
            visited.push({
                row: row,
                column: column
            });

            grid[row][column].prevNode = {
                row: current.row,
                column: current.column
            }
            
            if(endRow === childrens[a].row && endColumn === childrens[a].column){
                //console.log("there is a match")
                //Create a function called find shortest path

                let shortestPath = getShortestPath(grid, grid[row][column]);

                /* console.log({shortestPath: shortestPath,
                    visited: visited}) */

                console.log(shortestPath);

                return {
                    shortestPath: shortestPath,
                    visited: visited
                } //This will break the loop
            }

            queue.push(grid[row][column]);
            
        }
    }
}


//This function will take in a node, and it will return the rows and columns of it's childrens
const getChildren = (node, maxRow, maxColumn) => {
    //We're going to get the children of this node

    let row = node.row;
    let column = node.column;
    let children = []; //Empty array //We're going to push an object into here

    //grid.length gives us the number of rows
    //grid[0].length gives us the number of columns

    //add left children
    if(column-1 >= 0){
        children.push({
            row: row,
            column: column-1
        })
    }
    //add right children
    if(column+1 < maxColumn){
        children.push({
            row: row,
            column: column+1
        })
    }
    //add top children
    if(row-1 >= 0){
        children.push({
            row: row-1,
            column: column
        })
    }
    //add bottom children
    if(row+1 <maxRow){
        children.push({
            row: row+1,
            column: column
        })
    }

    return children; //We will return an array of children nodes here
}

//This function will return the shortest path via BFS
const getShortestPath = (grid, endingNode) => {
    let current = grid[endingNode.row][endingNode.column];
    let shortestPath = [];

    shortestPath.push({
        row: endingNode.row,
        column: endingNode.column
    });

    while(current.prevNode !== undefined){

        current = grid[current.prevNode.row][current.prevNode.column];

        shortestPath.push({
            row: current.row,
            column: current.column
        });
    }

    return shortestPath;
}
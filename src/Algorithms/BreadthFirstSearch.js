import { unwatchFile } from "fs";

//This is our breadth first search function
export function BFS(grid, startRow, startColumn, endRow, endColumn){
    
    let startingNode = grid[startRow][startColumn]; //this will be our starting node
    let endNode = grid[endRow][endColumn]; //This will be our end node
    let current;

    let queue = [];
    //let visited = []; //these would be used if our nodes are not objects
    //let prev = {}; //these would be used if our nodes are not objects

    //array.push -> push an element in front of an array
    //array.shift -> remove an element in front of an array

    //Set the startingNode isVisited to true
    startingNode.isVisited = true;

    queue.push(startingNode);   //We're pushing our starting node into the queue


    while(queue.length){ //While there is something in the queue, do something below

        current = queue.shift(); //remove first node from queue and assign it to the current variable

        let childrens = getChildren(currentNode);

        /*
            What to do next, we need to test out this algorithm to see if it actually works
        */



    }





}

const getChildren = (grid, node) => {
    //We're going to get the children of this node

    let row = node.row;
    let column = node.column;

    let children = []; //Empty array //We're going to push an object into here

    //add left children
    if(column-1 >= 0 ){
        children.push({
            row: row,
            column: column-1
        })
    }
    //add right children
    if(column+1 < node.length){
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
    if(row+1 < node.length){
        children.push({
            row: row+1,
            column: column
        })
    }

    return children; //We will return an array of children nodes here
}

//Function used to return childrens of a node
export function getChildrens(node, maxRow, maxColumn){
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
    //add top children
    if(row-1 >= 0){
        children.push({
            row: row-1,
            column: column
        })
    }
    //add right children
    if(column+1 < maxColumn){
        children.push({
            row: row,
            column: column+1
        })
    }
    //add bottom children
    if(row+1 < maxRow){
        children.push({
            row: row+1,
            column: column
        })
    }

    return children; //We will return an array of children nodes here
}


//Function used to return the shorted path of an algorithm
export const getShortestPath = (grid, endingNode) => {
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

export function getChildrensDijkstra(grid, node) {
    let row = node.row;
    let column = node.column;
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let childrens = [];

    //add left children
    if(column-1 >= 0){
        
    }
    //add top children
    if(row-1 >= 0){
        
    }
    //add right children
    if(column+1 < maxCol){
        
    }
    //add bottom children
    if(row+1 < maxRow){
        
    }

    return childrens; //We will return an array of children nodes here
}

export function getLowestValue(valueA, valueB){
    let lowestValue;

    if(valueA < valueB){
        
    }
}  
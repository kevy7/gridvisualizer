import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

//My priorityQurue data structure should work with this algorithm, we want to visit the node that has a 
//lower estimated distance to the end

const GreedyBestFirstSearch = (grid, startRow, startColumn, endRow, endColumn) => {
    let queue = new priorityQueue(); //Created an instance of priorityQueue class

    //For our Greedy BFS, our heuristic (an estimate measure of how far something is to an endpoint) is going to be based on Manhattan Distance

    //Column = X coordinates
    //Row = Y coordinates

    let maxRow = grid.length; //used on the getChildrens algorithm
    let maxColumn = grid[0].length; //used on the getChildrens algorithm
    let startingNode = grid[startRow][startColumn];
    let currentNode;
    let visited = [];

    //set starting nodes distance to 0 since we want to remove it from our queue first
    startingNode.distance = 0;
    queue.addQueue(startingNode);

    while(queue.queue.length){
        currentNode = queue.deQueue();
        if(currentNode.isVisited !== true){
            currentNode.isVisited = true;
            visited.push({
                row: currentNode.row,
                column: currentNode.column
            });
        }

        let childrens = getChildrens(currentNode, maxRow, maxColumn);

        for(var a = 0; a < childrens.length; a++){
            //loop through each of the current node's children
            let childRow = childrens[a].row;
            let childCol = childrens[a].column;
            let distance = manhattanDistance(childRow, childCol, endRow, endColumn); //This is our hueristic

            if(currentNode.row === endRow && currentNode.column === endColumn){
                let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
                return {
                    visited: visited,
                    shortestPath: shortestPath
                }
            }

            //Don't do anything with this node if it is a wall or already visited
            if(grid[childRow][childCol].isWall){continue}
            if(grid[childRow][childCol].isVisited){continue}

            //assign current child's previous node
            grid[childRow][childCol].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            };

            //assign the current child's distance
            if(grid[childRow][childCol].isWeight){
                grid[childRow][childCol].distance = distance + 14;
            }
            else {
                grid[childRow][childCol].distance = distance 
            }

            //add current child node into the queue after it has been assigned a previous node and distance
            queue.addQueue(grid[childRow][childCol]);

        }




    }



    
    
}

//This is our heuristic, this function will calculate the estimate distance between a node and our selected end node
const manhattanDistance = (row, column, endRow, endColumn) => {
    /*
        (x1, x2)
        (y1, y2)

        manHattanDistance formula = | x1- y1 | + | x2 - y2 |

    */

    let estDistance = (Math.abs(row - endRow) + Math.abs(column - endColumn));

    return estDistance;
}

export default GreedyBestFirstSearch;
import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

//My priorityQurue data structure should work with this algorithm, we want to visit the node that has a 
//lower estimated distance to the end

const GreedyBestFirstSearch = (grid, startRow, startColumn, endRow, endColumn) => {
    let priorityQueue = new priorityQueue(); //Created an instance of priorityQueue class

    //For our Greedy BFS, our heuristic (an estimate measure of how far something is to an endpoint) is going to be based on Manhattan Distance

    //Column = X coordinates
    //Row = Y coordinates

    let maxRow = grid.length; //used on the getChildrens algorithm
    let maxColumn = grid[0].length; //used on the getChildrens algorithm
    let startingNode = grid[startRow][startColumn];
    let currentNode;
    let visited = [];

    //set starting nodes distance to 0 since we want to remove it from our queue first
    



    
    
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
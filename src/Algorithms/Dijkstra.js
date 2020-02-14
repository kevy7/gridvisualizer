import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

const Dijkstra = (grid, startRow, startColumn, endRow, endColumn) => {
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let startingNode = grid[startRow][startColumn]; 
    //let priorityQueue = []; //using a binary heap instead
    let queue = new priorityQueue();
    let visited = [];
    startingNode.distance = 0;
    startingNode.isVisited = true;
    visited.push({
        row: startingNode.row,
        column: startingNode.column
    });

    returnNodesArray(grid);

}

const returnNodesArray = (grid) => {
    grid[0][0].distance = 100;
    console.log(grid);
}

const returnNodeInOrder = (grid) => {

}

export default Dijkstra;

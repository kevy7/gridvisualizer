import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

const Dijkstra = (grid, startRow, startColumn, endRow, endColumn) => {
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let startingNode = grid[startRow][startColumn]; 
    //let priorityQueue = []; //using a binary heap instead
    let queue = new priorityQueue();
    let visited = [];


    //console.log("yay");
    startingNode.distance = 0;
    startingNode.isVisited = true;
    visited.push({
        row: startingNode.row,
        column: startingNode.column
    });
    grid[0][0].distance = 15;
    grid[0][1].distance = 2;
    grid[0][3].distance = 5;
    queue.addQueue(startingNode);
    queue.addQueue(grid[0][0]);
    queue.addQueue(grid[0][1]);
    queue.addQueue(grid[0][3]);

    console.log(queue.queue);



}

const returnNodesArray = () => {

}

const returnNodeInOrder = (grid) => {

}

export default Dijkstra;

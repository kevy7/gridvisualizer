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
    /* startingNode.isVisited = true;
    visited.push({
        row: startingNode.row,
        column: startingNode.column
    }); */
    queue.addQueue(startingNode);

    while(queue.queue.length){
        let childrens = getChildrens(startingNode, maxRow, maxCol);
        let currentNode = queue.deQueue(); //Remove first priority from your array
        currentNode.isVisited = true;
        visited.push({
            row: currentNode.row,
            column: currentNode.column
        });

        for(var a = 0; a < childrens.length; a++){
            /*
                children returns row and column
            */

            let prevRow = currentNode.row;
            let prevCol = currentNode.column;
            let prevDistance = grid[prevRow][prevCol].distance;

            grid[childrens[a].row][childrens[a].column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }
            grid[childrens[a].row][childrens[a].column].distance = 1 + prevDistance;

            console.log(grid[childrens[a].row][childrens[a].column]);
        }



    }

}

const returnNodesArray = (grid) => {
    
}

const returnNodeInOrder = (grid) => {

}

export default Dijkstra;

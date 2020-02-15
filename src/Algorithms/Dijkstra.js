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
    queue.addQueue(startingNode);

    while(queue.queue.length){
        let childrens = getChildrens(startingNode, maxRow, maxCol);
        let currentNode = queue.deQueue(); //Remove first priority from your array

        for(var a = 0; a < childrens.length; a++){
            /*
                children returns row and column
            */

            let prevRow;
            let prevCol;
            let prevDistance;

            //console.log(grid[childrens[a].row][childrens[a].column].distance);
            grid[childrens[a].row][childrens[a].column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }

            prevRow = grid[childrens[a].row][childrens[a].column].prevNode.row;
            prevCol = grid[childrens[a].row][childrens[a].column].prevNode.column;


            console.log(prevNodeRow);

            console.log(grid[childrens[a].row][childrens[a].column].prevNode);
        }



    }

}

const returnNodesArray = (grid) => {
    
}

const returnNodeInOrder = (grid) => {

}

export default Dijkstra;

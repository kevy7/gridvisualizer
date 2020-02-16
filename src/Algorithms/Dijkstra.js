import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

const Dijkstra = (grid, startRow, startColumn, endRow, endColumn) => {

    grid[1][1].isWall = true;
    console.log(grid);

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
    //console.log(queue.queue);

    while(queue.queue.length){
        let currentNode =  queue.deQueue(); //Remove first priority from your array
        let childrens = getChildrens(currentNode, maxRow, maxCol);
        if(currentNode.isVisited === false){
            currentNode.isVisited = true;
            visited.push({
                row: currentNode.row,
                column: currentNode.column
            });
        }

        if(currentNode.row === endRow && currentNode.column === endColumn){
            let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        }

        for(var a = 0; a < childrens.length; a++){

            /* console.log(" ");
            console.log("current")
            console.log(currentNode);

            
            console.log(" ");
            console.log("Child");
            console.log(childrens[a]); */

            

            let prevRow = currentNode.row;
            let prevCol = currentNode.column;
            let prevDistance = grid[prevRow][prevCol].distance;
            let children = grid[childrens[a].row][childrens[a].column];
            //Add Queue here
            if(children.isVisited){continue}



            //This code needs to be changed
            if(grid[childrens[a].row][childrens[a].column].prevNode !== undefined){
                console.log("this is not undefined!!!");
            }


            

            grid[childrens[a].row][childrens[a].column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }




            if(grid[childrens[a].row][childrens[a].column].isWall){
                grid[childrens[a].row][childrens[a].column].distance = 15 + prevDistance;
                //console.log("this is true");
            }
            else {
                grid[childrens[a].row][childrens[a].column].distance = 1 + prevDistance;
            }
            //grid[childrens[a].row][childrens[a].column].distance = 1 + prevDistance;

            
            queue.addQueue(children);
        }


    }

}

const returnNodesArray = (grid) => {
    
}

const returnNodeInOrder = (grid) => {

}

export default Dijkstra;

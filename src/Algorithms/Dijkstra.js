import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

const Dijkstra = (grid, startRow, startColumn, endRow, endColumn) => {

    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let startingNode = grid[startRow][startColumn]; 
    let queue = new priorityQueue();
    let visited = [];
    startingNode.distance = 0;
    queue.addQueue(startingNode);
    let currentNode;
    let childrens

    while(queue.queue.length){
        currentNode = queue.deQueue(); //Remove first priority from your array
        childrens = getChildrens(currentNode, maxRow, maxCol);
        if(currentNode.isVisited === false){
            currentNode.isVisited = true;
            visited.push({
                row: currentNode.row,
                column: currentNode.column
            });
        }
        //console.log(currentNode);

        /* if(currentNode.row === endRow && currentNode.column === endColumn){
            let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        } */
        
        for(var a = 0; a < childrens.length; a++){

            //let prevDistance = grid[currentNode.row][currentNode.column].distance;
            if(grid[childrens[a].row][childrens[a].column].isVisited){continue}

            if(grid[childrens[a].row][childrens[a].column].prevNode === undefined){
                grid[childrens[a].row][childrens[a].column].prevNode = {
                    row: currentNode.row,
                    column: currentNode.column
                }
            }

            //Purpose of the code below
            //This will compare the distance between the current node and this child's preNode
            //Which ever is the lowest, will be assigned as the child's previous node
            if(grid[childrens[a].row][childrens[a].column].prevNode.row !== currentNode.row 
                && grid[childrens[a].row][childrens[a].column].prevNode.column !== currentNode.column
            ){
                let prevRow = grid[childrens[a].row][childrens[a].column].prevNode.row;
                let prevColumn = grid[childrens[a].row][childrens[a].column].prevNode.column;
                let prevNode = grid[prevRow][prevColumn];

                if(prevNode.distance !== currentNode.distance){

                    //Create a function to find the less of two variables
                    if(prevNode.distance < currentNode.distance){
                        console.log("this is lower");
                        grid[childrens[a].row][childrens[a].column].prevNode = {
                            row: prevRow,
                            column: prevColumn
                        }
                    }

                }
                
            }

            //Add distance
            if(grid[childrens[a].row][childrens[a].column].isWeight){
                grid[childrens[a].row][childrens[a].column].distance = 10 + grid[grid[childrens[a].row][childrens[a].column].prevNode.row][grid[childrens[a].row][childrens[a].column].prevNode.column].distance
            }
            else {
                grid[childrens[a].row][childrens[a].column].distance = 1 + grid[grid[childrens[a].row][childrens[a].column].prevNode.row][grid[childrens[a].row][childrens[a].column].prevNode.column].distance
            }

            if(currentNode.row === endRow && currentNode.column === endColumn){
                let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
                return {
                    visited: visited,
                    shortestPath: shortestPath
                }
            }

            queue.addQueue(grid[childrens[a].row][childrens[a].column]);

        }

    }

}

export default Dijkstra;

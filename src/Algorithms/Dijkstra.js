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

        if(currentNode.row === endRow && currentNode.column === endColumn){
            let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
            //console.log(queue.queue);
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        }
        
        for(var a = 0; a < childrens.length; a++){

            //let prevDistance = grid[currentNode.row][currentNode.column].distance;
            if(grid[childrens[a].row][childrens[a].column].isVisited){continue}

            //Not sure if the code below is needed anymore
            //This code needs to be changed
            /* if(grid[childrens[a].row][childrens[a].column].prevNode !== undefined){
                
                //compare current node's distances with the children's preNode
                //let prevNodeRow = grid[childrens[a].row][childrens[a].column].prevNode.row;
                //let prevNodeCol = grid[childrens[a].row][childrens[a].column].prevNode.column;
                let prevNodeDistance = grid[grid[childrens[a].row][childrens[a].column].prevNode.row][grid[childrens[a].row][childrens[a].column].prevNode.column].distance;

                //Get the lower of prevDistance or currentNode's distance
                //If the current node's distance is lower than what's in this child's prevNode's distance, set its' prevnode to the current node

                if(currentNode.distance <= prevNodeDistance){

                    grid[childrens[a].row][childrens[a].column].prevNode = {
                        row: currentNode.row,
                        column: currentNode.column
                    }
                    grid[currentNode.row][currentNode.column].distance = currentNode.distance;
                }
                else if(currentNode.distance > prevNodeDistance){
                    grid[childrens[a].row][childrens[a].column].prevNode = {
                        row: grid[childrens[a].row][childrens[a].column].prevNode.row,
                        column: grid[childrens[a].row][childrens[a].column].prevNode.column
                    }
                    grid[currentNode.row][currentNode.column].distance = prevNodeDistance;
                }

            }
            else if(grid[childrens[a].row][childrens[a].column].prevNode === undefined){
                grid[childrens[a].row][childrens[a].column].prevNode = {
                    row: currentNode.row,
                    column: currentNode.column
                }
            }  */

            grid[childrens[a].row][childrens[a].column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }

            //Add distance
            if(grid[childrens[a].row][childrens[a].column].isWeight){
                grid[childrens[a].row][childrens[a].column].distance = 15 + grid[currentNode.row][currentNode.column].distance
            }
            else {
                grid[childrens[a].row][childrens[a].column].distance = 1 + grid[currentNode.row][currentNode.column].distance
            }

            


            queue.addQueue(grid[childrens[a].row][childrens[a].column]);

        }

    }

}

export default Dijkstra;

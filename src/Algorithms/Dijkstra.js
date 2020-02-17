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
        currentNode =  queue.deQueue(); //Remove first priority from your array
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
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        }
        
        for(var a = 0; a < childrens.length; a++){

            let prevRow = currentNode.row;
            let prevCol = currentNode.column;
            let prevDistance = grid[prevRow][prevCol].distance;
            let children = grid[childrens[a].row][childrens[a].column];
            let toAdd;
            //Add Queue here
            if(children.isVisited){continue}

            //This code needs to be changed
            if(children.prevNode !== undefined){
                
                //compare current node's distances with the children's preNode
                let currentDistance = currentNode.distance;
                let prevNodeRow = grid[childrens[a].row][childrens[a].column].prevNode.row;
                let prevNodeCol = grid[childrens[a].row][childrens[a].column].prevNode.column;
                let prevNodeDistance = grid[prevNodeRow][prevNodeCol].distance;

                //Get the lower of prevDistance or currentNode's distance
                //If the current node's distance is lower than what's in this child's prevNode's distance, set its' prevnode to the current node

                if(currentDistance <= prevNodeDistance){

                    grid[childrens[a].row][childrens[a].column].prevNode = {
                        row: currentNode.row,
                        column: currentNode.column
                    }
                    prevDistance = currentDistance;
                }
                else if(currentDistance > prevNodeDistance){
                    grid[childrens[a].row][childrens[a].column].prevNode = {
                        row: prevNodeRow,
                        column: prevNodeCol
                    }
                    prevDistance = prevNodeDistance;
                }

            }
            else if(children.prevNode === undefined){
                grid[childrens[a].row][childrens[a].column].prevNode = {
                    row: currentNode.row,
                    column: currentNode.column
                }
            }

            if(grid[childrens[a].row][childrens[a].column].isWall){
                grid[childrens[a].row][childrens[a].column].distance = 15 + prevDistance
            }
            else {
                grid[childrens[a].row][childrens[a].column].distance = 1 + prevDistance
            }

            queue.addQueue(grid[childrens[a].row][childrens[a].column]);

            if(grid[childrens[a].row] === endRow && grid[childrens[a].column] === endColumn){
                console.log("match");
                break;
            }

        }

        /* if(currentNode.row === endRow && currentNode.column === endColumn){
            let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        } */


    }

}

export default Dijkstra;

import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

const Dijkstra = (grid, startRow, startColumn, endRow, endColumn) => {

    //grid[0][2].isWall = true;
    grid[1][0].isWall = true;
    grid[2][0].isWall = true;
    //grid[2][1].isWall = true;

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

        //Moving this code to below the loop
        /* if(currentNode.row === endRow && currentNode.column === endColumn){
            let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        } */

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
            let distance;
            //Add Queue here
            if(children.isVisited){continue}






            /* grid[childrens[a].row][childrens[a].column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            } */

            //This code needs to be changed
            if(grid[childrens[a].row][childrens[a].column].prevNode !== undefined){
                console.log("this is not undefined!!!");
                
                //compare current node's distances with the children's preNode
                let currentDistance = currentNode.distance;
                let prevNodeRow = grid[childrens[a].row][childrens[a].column].prevNode.row;
                let prevNodeCol = grid[childrens[a].row][childrens[a].column].prevNode.column;
                let prevDistance = grid[prevNodeRow][prevNodeCol].distance;

                console.log("children: " + JSON.stringify(childrens[a]));
                console.log("prevDistance: " + prevDistance);
                console.log("prevNode: " + JSON.stringify(grid[prevNodeRow][prevNodeCol]));
                console.log("currentDistance: " + currentDistance);
                console.log("currentNode: " + JSON.stringify(currentNode));
                //console.log(" ");

                //Get the lower of prevDistance or currentNode's distance
                //If the current node's distance is lower than what's in this child's prevNode's distance, set its' prevnode to the current node
                if(currentDistance <= prevDistance){

                    grid[childrens[a].row][childrens[a].column].prevNode = {
                        row: currentNode.row,
                        column: currentNode.column
                    }
                }
                else if(currentDistance > prevDistance){
                    grid[childrens[a].row][childrens[a].column].prevNode = {
                        row: prevNodeRow,
                        column: prevNodeCol
                    }
                }

                console.log("New Prev Node: " + JSON.stringify(grid[childrens[a].row][childrens[a].column].prevNode));
                console.log(" ");
            }

            /* console.log(grid[childrens[a].row][childrens[a].column].prevNode);
            console.log(" "); */

            grid[childrens[a].row][childrens[a].column].prevNode = {
                row: currentNode.row,
                column: currentNode.column
            }

            if(grid[childrens[a].row][childrens[a].column].isWall){
                grid[childrens[a].row][childrens[a].column].distance = 15 + prevDistance;
            }
            else {
                grid[childrens[a].row][childrens[a].column].distance = 1 + prevDistance;
            }

            /* console.log(" ");
            console.log("new Prev Node");
            console.log(grid[childrens[a].row][childrens[a].column]); */

            
            queue.addQueue(grid[childrens[a].row][childrens[a].column]);
        }

        if(currentNode.row === endRow && currentNode.column === endColumn){
            let shortestPath = getShortestPath(grid, grid[endRow][endColumn]);
            return {
                visited: visited,
                shortestPath: shortestPath
            }
        }


    }

}

const returnNodesArray = (grid) => {
    
}

const returnNodeInOrder = (grid) => {

}

export default Dijkstra;

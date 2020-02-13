import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';

const Dijkstra = (grid, startRow, startColumn, endRow, endColumn) => {
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let startingNode = grid[startRow][startCol]; //This will be our starting node
    //let stack = [];
    let visited = []; //This will be an array of objects

    //First, we need to create some kind of data structure to order our nodes based on priority
    startingNode.isVisited = true;
    visited.push({
        row: startRow,
        column: startColumn
    });
    startingNode.distance = 0; //Set starting node's distance to 0




}

export default Dijkstra;

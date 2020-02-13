import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';

const Dijkstra = (grid, startRow, startColoumn, endRow, endColumn) => {
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let startingNode = grid[startRow][startCol]; //This will be our starting node
    //let stack = [];
    let visited = []; //This will be an array of objects

    //First, we need to create some kind of data structure to order our nodes based on priority

}

export default Dijkstra;

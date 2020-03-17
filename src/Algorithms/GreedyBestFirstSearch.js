import { getChildrens, getShortestPath } from './Algofunctions/Algofunctions';
import priorityQueue from '../dataStructures/priorityQueue';

//My priorityQurue data structure should work with this algorithm, we want to visit the node that has a 
//lower estimated distance to the end

const GreedyBestFirstSearch = (grid, startRow, startColumn, endRow, endColumn) => {
    let priorityQueue = new priorityQueue(); //Created an instance of priorityQueue class

    //For our Greedy BFS, our heuristic (an estimate measure of how far something is to an endpoint) is going to be based on Manhattan Distance

    //Column = X coordinates
    //Row = Y coordinates

    
    
}

export default GreedyBestFirstSearch;
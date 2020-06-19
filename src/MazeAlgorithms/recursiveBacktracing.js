const recursiveBacktracking = (grid, minWidth, maxWidth, minHeight, maxHeight) => {
    //Find a way to return walls, issue is we can create paths but how would we return the walls?
    //ideally, function should stop when every node was visited
    let stack = [];
    let mazeWalls = [];
    let randomRow = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight; //Will select a random row within range
    let randomColumn = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth; //Will select a random column within range
    let startingNode = grid[randomRow][randomColumn];

    /*

    node props for reference

    row: PropTypes.number,
    column: PropTypes.number,
    startRow: PropTypes.number,
    startColumn: PropTypes.number,
    isVisted: PropTypes.bool,
    isPath: PropTypes.bool,
    prevNode: PropTypes.object,
    updateState: PropTypes.func,
    isStart: PropTypes.bool,
    isEnd: PropTypes.bool,
    isWall: PropTypes.bool,
    distance: PropTypes.number,
    isWeight: PropTypes.bool,
    fValue: PropTypes.number

    */

    //Set up starting node
    startingNode.isVisited = true;





}

export default recursiveBacktracking;

//create a function here called get children
const getChildren = () => {

}
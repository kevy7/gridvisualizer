import React, {Component} from 'React';

import Node from "../Node/Node";

class Grid extends Component {
    state = {
        grid = []
    }

    componentWillMount = () => {
        //let grid = createInitialGrid();
        //this.setState({grid: grid})
    }

    render(){
        return (
            <div>
                This is the grid component
            </div>
        )
    }

    //Adding our functions down here
    //We imported our nodes as well

    //Create nodes and push them into our grid above

    createInitialGrid = () => {
        let grid = [];
        //We're going to create our grid here, and push in our node
        for(var a = 0; a <= 20; a++){
            let nodeRows = [];
            for(var b = 0; b <= 20; b++){
                //create nodes here
            }
        }
    }

    //Create a node
    createNode = (row, column) => {
        //Return the following object
        return {
            row: row,
            column: column,
            startRow: undefined,
            startColumn: undefined,
            isVisited: false,
            prevNode: undefined
        }
    }
}

export default Grid;
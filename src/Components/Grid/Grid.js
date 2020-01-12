import React, {Component} from 'react';

import Styles from './Grid.module.css';
import Node from "../Node/Node";

class Grid extends Component {
    state = {
        grid: []
    }

    componentWillMount = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
    }

    render(){

        return (
            <div>
                {/* <Node /> */}
                This is the grid component

                {
                    this.state.grid.map((nodeRows, rowidx) => {
                        return (
                            <div key={rowidx} className={Styles.nodeRows}>
                                {
                                    
                                    nodeRows.map((node, columnidx) => {
                                        return <Node 
                                            key={columnidx}
                                            row={node.row}
                                            column={node.column}
                                            startRow={node.startRow}
                                            startColumn={node.startColumn}
                                            isVisited={node.isVisited}
                                            prevNode={node.prevNode}
                                        />
                                    })

                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    //Create nodes and push them into our grid above

    createInitialGrid = () => {

        let grid = [];
        let currentNode;
        //We're going to create our grid here, and push in our node

        for(var a = 0; a < 20; a++){
            let nodeRows = [];
            for(var b = 0; b < 20; b++){
                //create nodes here
                currentNode = this.createNode(a, b);
                nodeRows.push(currentNode);
            }
            grid.push(nodeRows);
        }

        return grid;
        
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
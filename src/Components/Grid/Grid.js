import React, {Component} from 'react';

import Styles from './Grid.module.css';
import Node from "../Node/Node";

import { BFS } from "../../Algorithms/BreadthFirstSearch";

class Grid extends Component {
    state = {
        grid: [],
        startRow: null,
        startColumn: null,
        endRow: null,
        endColumn: null
    }

    componentWillMount = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
    }

    updateState = () => {
        //this.setState({grid});
        console.log("This function is being called from the grid");
    }

    animatePath = () => {

        let { shortestPath, visited } = BFS(this.state.grid, 1, 1, 15, 12);

        /*
            row: rowNumber,
            column: columnNumber
        */
        let index = 0;

        visited.forEach(node => {
            index ++;

            setTimeout(() => {
                let copyGrid = this.state.grid;
                
                copyGrid[node.row][node.column].nodeVisted = true;
                this.setState({grid: copyGrid});

            }, index * 20);

            //this.setState({grid: copyGrid});
            //setTimeout
        });
    }

    render(){

        //console.log(BFS(this.state.grid, 1, 1, 0, 0));

        //let datapoint =  BFS(this.state.grid, 1, 1, 0, 0);

        //console.log(datapoint);

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
                                            nodeVisted={node.nodeVisted}
                                            prevNode={node.prevNode}
                                            updateState={this.updateState}
                                        />
                                    })

                                }
                            </div>
                        )
                    })
                }

                <button type="button" onClick={this.animatePath}>Click me!</button>
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
            nodeVisted: false,
            prevNode: undefined
        }
    }

}

export default Grid;
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

    //How can I do this better?
    animatePath = () => {

        let { shortestPath, visited } = BFS(this.state.grid, 1, 1, 15, 19);
        let gridPath = this.state.grid;

        /*
            row: rowNumber,
            column: columnNumber
        */

        let index = 0;

        visited.forEach(node => {
            index +=1;

            setTimeout(() => {
                /* let copyGrid = this.state.grid;
                
                copyGrid[node.row][node.column].nodeVisted = true;
                this.setState({grid: copyGrid}); */

                document.getElementById(`node-${node.row}-${node.column}`).className = "node node-visited";

            }, index * 25);
        });

        setTimeout(() => {
            shortestPath.forEach(node => {
                gridPath[node.row][node.column].isPath = true;
            })
            this.setState({grid: gridPath});
        }, index * 25);

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
                                            isPath={node.isPath}
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

        for(var a = 0; a < 50; a++){
            let nodeRows = [];
            for(var b = 0; b < 50; b++){
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
            isPath: false,
            nodeVisted: false,
            prevNode: undefined
        }
    }

}

export default Grid;
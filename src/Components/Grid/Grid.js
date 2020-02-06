import React, {Component} from 'react';
import { connect } from 'react-redux';

import Styles from './Grid.module.css';
import Node from "../Node/Node";

import { BFS } from "../../Algorithms/BreadthFirstSearch";
import { selectStartNode, selectEndNode } from '../../userActions/userActions';
import { func } from 'prop-types';

class Grid extends Component {
    
    state = {
        grid: [],
        startRow: null,
        startColumn: null,
        endRow: null,
        endColumn: null,
        action: undefined,
        shortestPath: [],
        visited: []
    }

    componentWillMount = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
    }

    //This function will be used to update the grid
    updateState = (row, column, userAction) => {
        let grid = this.state.grid;

        //grid[row][column]
        if(userAction === selectStartNode){
            grid[row][column].isStart = true;
        }
        else if(userAction === selectEndNode){
            grid[row][column].isEnd = true;
        }

        this.setState({grid: grid});
    }

    animatePath = () => {

        if(!this.props.selectedGrids.startingGrid.row){
            alert("No Starting or End Nodes were selected. Please select a start and end node.")
        }
        
        else {

            let startRow = this.props.selectedGrids.startingGrid.row;
            let startColumn = this.props.selectedGrids.startingGrid.column;
            let endRow = this.props.selectedGrids.endingGrid.row;
            let endColumn = this.props.selectedGrids.endingGrid.column;

            let { shortestPath, visited } = BFS(this.state.grid, startRow, startColumn, endRow, endColumn);
            this.setState({shortestPath: shortestPath});
            this.setState({visited: visited});
            let gridPath = this.state.grid;

            /*
                row: rowNumber,
                column: columnNumber
            */

            let index = 0;

            visited.forEach(node => {
                index +=1;

                setTimeout(() => {

                    document.getElementById(`node-${node.row}-${node.column}`).className = "node node-visited";

                }, index * 10);
            });

            setTimeout(() => {
                shortestPath.forEach(node => {
                    gridPath[node.row][node.column].isPath = true;
                })
                this.setState({grid: gridPath});
            }, index * 10);
        }
    }

    resetGrid = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
        
        this.state.visited.forEach(node => {
            document.getElementById(`node-${node.row}-${node.column}`).className = "node";
        })
    }

    render(){

        //console.log(this.state.grid);

        window.onresize = () => {
            //console.log(window.innerWidth);
            let grid = this.createInitialGrid();
            this.setState({grid})
        } 

        return (
            <div className="grid">
                <button className="button" type="button" onClick={this.animatePath}>Run Algorithm</button>
                <button className="button" type="button" onClick={this.resetGrid}>Reset Grid</button>
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
                                            prevNode={node.prevNode}
                                            updateState={this.updateState}
                                            isStart={node.isStart}
                                            isEnd={node.isEnd}
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
        let width = Math.round(window.innerWidth / 25); //How do you change this as the width changes?
        
        //We're going to create our grid here, and push in our node

        for(var a = 0; a < 30; a++){
            let nodeRows = [];
            for(var b = 0; b < width; b++){
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
            prevNode: undefined,
            isStart: false,
            isEnd: false,
        }
    }

}

const mapStateToProps = (state) => {
    return {
        selectedGrids: state.selectedGrids
    }
}

export default connect(mapStateToProps)(Grid);
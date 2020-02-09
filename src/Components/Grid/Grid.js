import React, {Component} from 'react';
import { connect } from 'react-redux';

import Styles from './Grid.module.css';
import Node from "../Node/Node";

import { BFS } from "../../Algorithms/BreadthFirstSearch";
import { DFS } from "../../Algorithms/DebthFirstSearch";
import { selectStartNode, selectEndNode } from '../../userActions/userActions';
import { BreadthFS, DebthFS } from '../../userAlgo/userAlgo';
import { selectAction, resetSelectedGrids } from '../../actions/index';
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

    resetGrid = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
        
        this.state.visited.forEach(node => {
            document.getElementById(`node-${node.row}-${node.column}`).className = "node";
        })

        this.props.resetSelectedGrids();
        this.props.selectAction(selectStartNode);
        //Create an action to reset the selectGrids state
    }

    animatePath = () => {
        let startRow = this.props.selectedGrids.startingGrid.row;
        let startColumn = this.props.selectedGrids.startingGrid.column;
        let endRow = this.props.selectedGrids.endingGrid.row;
        let endColumn = this.props.selectedGrids.endingGrid.column;
        let algoResult;
        let index = 0;

        if(!this.props.selectedGrids.startingGrid.row || !this.props.selectedGrids.endingGrid.row){
            alert("No Starting or End Nodes were selected. Please select a start and end node.")
        }
        else {

        if(this.props.selectedAlgo.selectedAlgo === BreadthFS){
            algoResult = BFS(this.state.grid, startRow, startColumn, endRow, endColumn);
            this.setState({shortestPath: algoResult.shortestPath});
            this.setState({visited: algoResult.visited});
        }
        else if(this.props.selectedAlgo.selectedAlgo === DebthFS){
            algoResult = DFS(this.state.grid, startRow, startColumn, endRow, endColumn);
            this.setState({shortestPath: algoResult.shortestPath});
            this.setState({visited: algoResult.visited});
        }

        algoResult.visited.forEach(node => {
            index +=1;

            setTimeout(() => {

                document.getElementById(`node-${node.row}-${node.column}`).className = "node node-visited";

            }, index * 10);
        });

        algoResult.shortestPath.reverse(); //to reverse the shortestPath

        algoResult.shortestPath.forEach(node => {
            index+=1;
            setTimeout(() => {
                document.getElementById(`node-${node.row}-${node.column}`).className = "node node-path";
            }, index * 10);
        })
        }
    }

    testFunction = () => {

    }

    render(){

        window.onresize = () => {
            let grid = this.createInitialGrid();
            this.setState({grid})
        } 

        let algoButton;

        if(this.props.selectedAlgo.selectedAlgo){
            algoButton = <button className="button" type="button" onClick={this.animatePath}>Run {this.props.selectedAlgo.selectedAlgo}</button>
        }

        return (
            <div className="grid">
                {algoButton}
                <button className="button" type="button" onClick={this.resetGrid}>Reset Grid</button>
                {/* <button className="button" type="button" onClick={this.testFunction}>Test Button</button> */}
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
        selectedGrids: state.selectedGrids,
        selectedAlgo: state.selectedAlgo
    }
}

export default connect(mapStateToProps, {
    resetSelectedGrids: resetSelectedGrids,
    selectAction: selectAction
})(Grid);
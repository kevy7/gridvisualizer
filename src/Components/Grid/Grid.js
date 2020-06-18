import React, {Component} from 'react';
import { connect } from 'react-redux';
import Styles from './Grid.module.css';
import Node from "../Node/Node";
import { BFS } from "../../Algorithms/BreadthFirstSearch";
import { DFS } from "../../Algorithms/DebthFirstSearch";
import Dijkstra from "../../Algorithms/Dijkstra";
import GreedyBestFirstSearch from "../../Algorithms/GreedyBestFirstSearch";
import ATreeSearch from "../../Algorithms/ATreeSearch";
import setOuterWalls from "../../MazeAlgorithms/setOuterWalls";
import recursiveDivision from "../../MazeAlgorithms/recursiveDivision";
import { selectStartNode, selectEndNode, selectTraffic, selectWall } from '../../userActions/userActions';
import { BreadthFS, DebthFS, DijkstraAlgo, GreedyBFS, ATreeSearchAlgo, RecursiveDivision } from '../../userAlgo/userAlgo';
import { selectAction, resetSelectedGrids } from '../../actions/index';
import ifContainsObject from '../../functions/ifContainsObject';
import dataStructureTest from '../../dataStructures/dataStructureTest';
import { func } from 'prop-types';
import { writeFile } from 'fs';

class NodeTest {
    constructor(val){
        this.val = val;
    }
}

class Grid extends Component {
    
    state = {
        grid: [],
        startRow: null,
        startColumn: null,
        endRow: null,
        endColumn: null,
        action: undefined,
        shortestPath: [], //We probably don't need this anymore
        visited: [],
        traffic: [],
        walls: [],

    }

    componentWillMount = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
    }

    addTraffic = (row, column) => {
        let traffic = this.state.traffic;
        let walls = this.state.walls;
        let selectedNode = {
            row: row,
            column: column
        }

        if(ifContainsObject(traffic, selectedNode) === false){
            //if the traffic array doesn't contain the your object, add it into the object
            //For this reason, this won't allow us to add multiple of the same objects
            traffic.push(selectedNode);
        }

        if(ifContainsObject(walls, selectedNode) === true){
            /*
                New example of how to filter an array
                
                let newArray = testArray.filter(function (el) {
                    return el.row !== object1.row ||
                    el.column !== object1.column
                });
            */

            //The code below will filter out and remove the 
            let newWalls = walls.filter(function (wall){
                return wall.row !== selectedNode.row ||
                wall.column !== selectedNode.column
            });
            this.setState({walls: newWalls});
        }


    }

    addWall = (row, column) => {
        let traffic = this.state.traffic;
        let walls = this.state.walls;
        let selectedNode = {
            row: row,
            column: column
        }

        if(ifContainsObject(walls, selectedNode) === false){
            walls.push(selectedNode);
        }
        if(ifContainsObject(traffic, selectedNode) === true){
            let newTraffic = traffic.filter(function (trafficVal){
                return trafficVal.row !== selectedNode.row ||
                trafficVal.column !== selectedNode.column
            });
            this.setState({traffic: newTraffic});
        }

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
        //If this action is selected, assign the current node as your weight
        else if(userAction === selectTraffic){
            grid[row][column].isWall = false;
            grid[row][column].isWeight = true;
            this.addTraffic(row, column);

            //Everytime this code gets executed, we want to push it into an array
        }
        else if(userAction === selectWall){
            grid[row][column].isWall = true;
            grid[row][column].isWeight = false;
            this.addWall(row, column);
        }

        this.setState({grid: grid});
    }

    resetGrid = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
        this.setState({traffic: []})
        this.setState({walls: []});
        let nodes = this.state.visited;

        /* for(var a =  0; a < this.state.visited.length; a++){
            document.getElementById(`node-${nodes[a].row}-${nodes[a].column}`).className = "node";
        } */

        this.state.visited.forEach(node => {
            document.getElementById(`node-${node.row}-${node.column}`).className = "node";
        })

        this.props.resetSelectedGrids();
        this.props.selectAction(selectStartNode);
        //Create an action to reset the selectGrids state
    }

    animatePath = () => {

        let grid = this.createInitialGrid(); //This may be inefficient. We don't always want to re-create our grid
        let nodes = this.state.visited;

        let startRow = this.props.selectedGrids.startingGrid.row;
        let startColumn = this.props.selectedGrids.startingGrid.column;
        let endRow = this.props.selectedGrids.endingGrid.row;
        let endColumn = this.props.selectedGrids.endingGrid.column;
        let algoResult;
        let index = 0;

        //The following code below is used for when the user want's to re-run the alogrithm
        //reset all nodes
        for(var a =  0; a < this.state.visited.length; a++){
            document.getElementById(`node-${nodes[a].row}-${nodes[a].column}`).className = "node";
        }

        if(this.props.selectedGrids.startingSelected){
            grid[startRow][startColumn].isStart = true;
        }

        if(this.props.selectedGrids.endingSelected){
            grid[endRow][endColumn].isEnd = true;
        }

        //If any traffic was already pre-selected, re-select them for animation.
        if(this.state.traffic.length > 0){
            for(var a = 0; a < this.state.traffic.length; a++){
                grid[this.state.traffic[a].row][this.state.traffic[a].column].isWeight = true;
            }
        }

        //If any walls was already pre-selected, re-select them for animation.
        if(this.state.walls.length > 0){
            for(var b = 0; b < this.state.walls.length; b++){
                grid[this.state.walls[b].row][this.state.walls[b].column].isWall = true;
            }
        }

        this.setState({grid});

        //The following code is used to run our algorithms
        if(!this.props.selectedGrids.startingSelected || !this.props.selectedGrids.endingSelected){
            alert("No Starting or End Nodes were selected. Please select a start and end node.")
        }
        else {

            //try{

            if(this.props.selectedAlgo.selectedAlgo === BreadthFS){
                algoResult = BFS(this.state.grid, startRow, startColumn, endRow, endColumn);
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === DebthFS){
                algoResult = DFS(this.state.grid, startRow, startColumn, endRow, endColumn);
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === DijkstraAlgo){
                algoResult = Dijkstra(this.state.grid, startRow, startColumn, endRow, endColumn);
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === GreedyBFS){
                algoResult = GreedyBestFirstSearch(this.state.grid, startRow, startColumn, endRow, endColumn);
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === ATreeSearchAlgo){
                algoResult = ATreeSearch(this.state.grid, startRow, startColumn, endRow, endColumn);
                this.setState({visited: algoResult.visited});
            }

            algoResult.visited.forEach(node => {
                index +=1;

                setTimeout(() => {

                    document.getElementById(`node-${node.row}-${node.column}`).className = "node node-visited";

                }, index * 7);
            });

            algoResult.shortestPath.reverse(); //to reverse the shortestPath

            algoResult.shortestPath.forEach(node => {
                index+=1;
                setTimeout(() => {
                    document.getElementById(`node-${node.row}-${node.column}`).className = "node node-path";
                }, index * 8); //10.5
            })

            //}//try
            //catch{
                //alert("Please reset the grid");
            //}


        }
    }

    animateMaze = () => {
        let maxWidth = this.state.grid[0].length;
        let maxHeight = this.state.grid.length;
        let gridCopy = this.state.grid;
        let outerWalls = setOuterWalls(this.state.grid, maxWidth, maxHeight);
        let mazeWalls;
        let index = 0; //used for animation

        if(this.props.selectedMazeAlgo.mazeAlgorithem === RecursiveDivision){
            //Assign our walls based on the recursive division algorithm
            mazeWalls = recursiveDivision(this.state.grid, 2, maxWidth-3, 2, maxHeight-3); //We want to start at our max width and max height at -3 in order for the function to work
        }
        //Else if algo === recursiveBacktracking, then run the algorithm below


        outerWalls = outerWalls.concat(mazeWalls);

        //used to animate the walls
        //after this loop executes, we need to execute the this.setState function
        /*
        outerWalls.forEach(node => {
            index+=1;
            setTimeout(() => {
                document.getElementById(`icon-${node.row}-${node.column}`).className = "node-wall";
                this.state.grid[node.row][node.column].isWall = true;
            }, index * 5);
        })
        */
        this.runMaze(outerWalls, index, this.state.grid).then(
           this.setState({walls: outerWalls})
        );
        
        
        //Animation currently does not work at the moment because of function below
        
        /*
        outerWalls.forEach(node => {
            this.state.grid[node.row][node.column].isWall = true;
        })*/
        

        //this.setState({walls: outerWalls});

        //using foreach with async/await

        
        
    }

    runMaze = async (arr, idx) => {
        arr.forEach(node => {
            idx+=1;
            setTimeout(() => {
                document.getElementById(`icon-${node.row}-${node.column}`).className = "node-wall";
                this.state.grid[node.row][node.column].isWall = true;
            }, idx * 5);
        })
    }

    testFunction = () => {
        
        

    }

    render(){

        window.onresize = () => {
            let grid = this.createInitialGrid();
            this.setState({grid});
        } 

        let algoButton;
        let mazeAlgoButton;

        if(this.props.selectedAlgo.selectedAlgo){
            algoButton = <button className="button" type="button" onClick={this.animatePath}>Run {this.props.selectedAlgo.selectedAlgo}</button>
        }
        if(this.props.selectedMazeAlgo.mazeAlgorithem){
            mazeAlgoButton = <button className="button" type="button" onClick={this.animateMaze}>Run {this.props.selectedMazeAlgo.mazeAlgorithem}</button>
        }


        return (
            <div className="grid">
                {algoButton}
                {mazeAlgoButton}
                <button className="button" type="button" onClick={this.resetGrid}>Reset Grid</button>
                <button className="button" type="button" onClick={this.testFunction}>Test Button</button>
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
                                            isWall={node.isWall}
                                            distance={node.distance}
                                            isWeight={node.isWeight}
                                            fValue={node.fValue}
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
        let width = Math.round(window.innerWidth / 25);
        let height = 30;
        
        //We're going to create our grid here, and push in our node

        for(var a = 0; a < height; a++){ //height
            let nodeRows = [];
            for(var b = 0; b < width; b++){ //width
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
            isWall: false,
            distance: Infinity,
            isWeight: false,
            fValue: Infinity //Value is used for the ATreeSearch algorithm, which relies on distance from starting node + est distance from ending node
        }
    }

}

const mapStateToProps = (state) => {
    return {
        selectedGrids: state.selectedGrids,
        selectedAlgo: state.selectedAlgo,
        selectedMazeAlgo: state.selectedMazeAlgo
    }
}

export default connect(mapStateToProps, {
    resetSelectedGrids: resetSelectedGrids,
    selectAction: selectAction
})(Grid);
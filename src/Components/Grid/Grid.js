import React, {Component} from 'react';
import { connect } from 'react-redux';
import Styles from './Grid.module.css';
import Node from "../Node/Node";
import { BFS } from "../../Algorithms/BreadthFirstSearch";
import { DFS } from "../../Algorithms/DebthFirstSearch";
import Dijkstra from "../../Algorithms/Dijkstra";
import GreedyBestFirstSearch from "../../Algorithms/GreedyBestFirstSearch";
import { selectStartNode, selectEndNode, selectTraffic, selectWall } from '../../userActions/userActions';
import { BreadthFS, DebthFS, DijkstraAlgo, GreedyBFS } from '../../userAlgo/userAlgo';
import { selectAction, resetSelectedGrids } from '../../actions/index';
import ifContainsObject from '../../functions/ifContainsObject';
import { func } from 'prop-types';
import { writeFile } from 'fs';

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

        //console.log(traffic);

        //THE .includes function is not working the way it's suppsoed to

        //This code won't work at the moment!!!!
        //use .includes to check if the array already contains your object
        if(!traffic.includes(selectedNode)){
            //if the traffic array doesn't contain the your object, add it into the object
            //For this reason, this won't allow us to add multiple of the same objects

            traffic.push(selectedNode);
            // this.setState({traffic: traffic});
            console.log("this function will execute")
        }

        if(walls.includes(selectedNode)){
            /*
                Example of how to filter something out of an array

                let testing = testArray.filter(test =>
                    test !== object4
                )
            */
            let newWalls = walls.filter(wall => wall !== selectedNode);
            this.setState({walls: newWalls});
        }




    }

    addWall = () => {
        
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
        }

        this.setState({grid: grid});
    }

    resetGrid = () => {
        let grid = this.createInitialGrid();
        this.setState({grid})
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

        //used to re-run algorithm

        /* let grid = this.createInitialGrid(); //This may be inefficient. We don't always want to re-create our grid
        let nodes = this.state.visited; */

        //used to re-run algorithm


        let startRow = this.props.selectedGrids.startingGrid.row;
        let startColumn = this.props.selectedGrids.startingGrid.column;
        let endRow = this.props.selectedGrids.endingGrid.row;
        let endColumn = this.props.selectedGrids.endingGrid.column;
        let algoResult;
        let index = 0;

        //The following code below is used for when the user want's to re-run the alogrithm
        //reset all nodes



        /* for(var a =  0; a < this.state.visited.length; a++){
            document.getElementById(`node-${nodes[a].row}-${nodes[a].column}`).className = "node";
        }

        if(this.props.selectedGrids.startingSelected){
            grid[startRow][startColumn].isStart = true;
        }

        if(this.props.selectedGrids.endingSelected){
            grid[endRow][endColumn].isEnd = true;
        }
        this.setState({grid}); */






        //The following code is used to run our algorithms
        if(!this.props.selectedGrids.startingGrid.row || !this.props.selectedGrids.endingGrid.row){
            alert("No Starting or End Nodes were selected. Please select a start and end node.")
        }
        else {

            try{
            //These codes break if the algo button is pressed twice

            if(this.props.selectedAlgo.selectedAlgo === BreadthFS){
                algoResult = BFS(this.state.grid, startRow, startColumn, endRow, endColumn);
                //this.setState({shortestPath: algoResult.shortestPath});
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === DebthFS){
                algoResult = DFS(this.state.grid, startRow, startColumn, endRow, endColumn);
                //this.setState({shortestPath: algoResult.shortestPath});
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === DijkstraAlgo){
                algoResult = Dijkstra(this.state.grid, startRow, startColumn, endRow, endColumn);
                //this.setState({shortestPath: algoResult.shortestPath});
                this.setState({visited: algoResult.visited});
            }
            else if(this.props.selectedAlgo.selectedAlgo === GreedyBFS){
                algoResult = GreedyBestFirstSearch(this.state.grid, startRow, startColumn, endRow, endColumn);
                //this.setState({shortestPath: algoResult.shortestPath});
                this.setState({visited: algoResult.visited});
            }

            algoResult.visited.forEach(node => {
                index +=1;

                setTimeout(() => {

                    document.getElementById(`node-${node.row}-${node.column}`).className = "node node-visited";

                }, index * 15);
            });

            algoResult.shortestPath.reverse(); //to reverse the shortestPath

            algoResult.shortestPath.forEach(node => {
                index+=1;
                setTimeout(() => {
                    document.getElementById(`node-${node.row}-${node.column}`).className = "node node-path";
                }, index * 16); //10.5
            })

            }//try
            catch{
                alert("Please reset the grid");
            }


        }
    }

    testFunction = () => {
        /* let startRow = this.props.selectedGrids.startingGrid.row;
        let startColumn = this.props.selectedGrids.startingGrid.column;
        let endRow = this.props.selectedGrids.endingGrid.row;
        let endColumn = this.props.selectedGrids.endingGrid.column;
        console.log(GreedyBestFirstSearch(this.state.grid, startRow, startColumn, endRow, endColumn)); */

        let array = [{row: 1, column: 2}, {row: 1, column: 3}, {row: 1, column: 7}];

        let testObject = {
            row: 1, column: 2
        }

        let value = ifContainsObject(array, testObject);

        console.log(value);

        
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
        let height = 30;
        
        //We're going to create our grid here, and push in our node

        for(var a = 0; a < height; a++){
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
            isWall: false,
            distance: Infinity,
            isWeight: false
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
import React, {Component} from 'react';

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
        //If there is something in our grid, console it
        /* if(this.state.grid.length){
            console.log(this.state.grid);
        } */


        return (
            <div>
                {/* <Node /> */}
                This is the grid component
                {/*this.displayGrid()*/}


                {
                    console.log(this.state.grid)
                }
            </div>
        )
    }

    //Create nodes and push them into our grid above

    createInitialGrid = () => {

        let grid = [];
        let currentNode;
        //We're going to create our grid here, and push in our node

        for(var a = 0; a < 5; a++){
            let nodeRows = [];
            for(var b = 0; b < 5; b++){
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


    //display grid
    displayGrid = () => {
        let grid = this.state.grid;

        /* console.log("display grid is being called");
        console.log(this.state.grid); */

        /* grid.map((nodeRows, rowidx) => {
            nodeRows.map((node, columnidx)=> {
                //Each node will be in here
                return <Node
                    row = {node.row}
                    column = {node.column}
                    startRow = {node.startRow}
                    startColumn = {node.startColumn}
                    isVisited = {node.isVisited}
                    prevNode = {node.prevNode}
                />
            })
        }); */   

    }





}

export default Grid;
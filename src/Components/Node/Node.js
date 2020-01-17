import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./Node.css";

//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {

    //This is just a test
    clickButton = () => {
        let message = "Row: " + this.props.row + " Column: " + this.props.column + " isVisited: " + this.props.isVisited;
        //this.props.updateState();

        console.log(message);

        //alert(message);
        //console.log(this.props.isVisited);
    }

    render(){
        let myStyle = {
            background: ""
        };
        
        //if this node is visited, then set it's background to be color blue
        if(this.props.nodeVisted === true){
            myStyle.background ="blue";
        }

        if(this.props.isPath === true){
            myStyle.background = "orange";
        }
        
        return (
            <div 
                className="node" 
                onClick={this.clickButton} 
                style={myStyle}
            >

            </div>
        )
    }
}

Node.propTypes = {
    row: PropTypes.number,
    column: PropTypes.number,
    startRow: PropTypes.number,
    startColumn: PropTypes.number,
    isVisted: PropTypes.bool,
    isPath: PropTypes.bool,
    nodeVisited: PropTypes.bool,
    prevNode: PropTypes.object,
    updateState: PropTypes.func
}

export default Node;
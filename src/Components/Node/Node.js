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
    }

    render(){
        let myStyle = {
            background: ""
        };

        if(this.props.isPath === true){
            myStyle.background = "orange";
        }
        
        return (
            <div 
                id={`node-${this.props.row}-${this.props.column}`}
                className="node" 
                onClick={this.clickButton} 
                style={myStyle}
            >
                {/* <i class="fas fa-stop node-icon"></i> 
                    Icon will be placed in here based on the user action
                */}
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
    prevNode: PropTypes.object,
    updateState: PropTypes.func
}

export default Node;
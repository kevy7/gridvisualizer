import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./Node.css";

//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {

    //This is just a test
    clickButton = () => {
        let message = "Row: " + this.props.row + " Column: " + this.props.column;
        alert(message);
        console.log(this.props.isVisited);
    }

    render(){
        let myStyle;
        
        //if this node is visited, then set it's background to be color blue
        if(this.props.isVisited === true){
            myStyle = {
                background: "blue"
            }


        }
        return (
            <div 
                className="node" 
                onClick={this.clickButton} 
                /* style={myStyle} */
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
    isVisited: PropTypes.bool,
    prevNode: PropTypes.object
}

export default Node;
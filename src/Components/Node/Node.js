import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectGrid } from '../../actions/index';
import { selectStartNode } from '../../userActions/userActions';
import { selectEndNode } from '../../userActions/userActions';
import "./Node.css";

//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {

    state = {
        iconName: ""
    }

    //This is just a test
    clickButton = () => {
        //let message = "Row: " + this.props.row + " Column: " + this.props.column + " isVisited: " + this.props.isVisited;

        let selectGridData = {
            userAction: this.props.userAction,
            selectedGrid: {
                row: this.props.row,
                column: this.props.column
            }
        }

        if(this.props.userAction === selectStartNode){
            //Push isSelected into the SelectGridData object
            //selectGridData.isSelected = this.props.selectedGrids.startingSelected;

            if(this.props.selectedGrids.startingSelected !== true){
                this.props.selectGrid(selectGridData);
                this.setState({iconName: this.props.userAction});
            }
            else if(this.props.selectedGrids.startingSelected === true){
                console.log("this is true, do not execute your action here")
            }
        }

    }

    render(){
        
        let myStyle = {
            background: ""
        };

        if(this.props.isPath === true){
            myStyle.background = "orange";
        }

        //let iconElement = <i class="fa fa-play node-icon"></i>;

        let iconName = "";

        iconName = this.state.iconName
        
        
        return (
            <div 
                id={`node-${this.props.row}-${this.props.column}`}
                className="node" 
                onClick={this.clickButton} 
                style={myStyle}
            >
                {/* <i class="fa fa-play node-icon"></i> */}
                <i className={iconName}></i>
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

const mapStateToProps = (state) => {
    return {
        userAction: state.userAction.userAction,
        selectedGrids: state.selectedGrids
    }
}

export default connect(mapStateToProps, {
    selectGrid: selectGrid
})(Node);
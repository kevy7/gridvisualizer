import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectGrid, selectAction } from '../../actions/index';
import { selectStartNode, selectEndNode } from '../../userActions/userActions';
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
            if(this.props.selectedGrids.startingSelected !== true){
                this.props.selectGrid(selectGridData);
                this.props.updateState(this.props.row, this.props.column, this.props.userAction);
                this.props.selectAction(selectEndNode);
            }
        }
        else if(this.props.userAction === selectEndNode){
            if(this.props.selectedGrids.endingSelected !== true){
                this.props.selectGrid(selectGridData);
                this.props.updateState(this.props.row, this.props.column, this.props.userAction);
                this.props.selectAction(selectStartNode);
            }
        }

    }

    render(){
        
        let myStyle = {
            background: ""
        };
        let iconName = "";

        if(this.props.isPath === true){
            myStyle.background = "hsl(171, 100%, 41%)";
        }

        if(this.props.isStart === true){
            iconName = selectStartNode;
        }
        else if(this.props.isEnd === true){
            iconName = selectEndNode;
        }
        
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
    updateState: PropTypes.func,
    isStart: PropTypes.bool,
    isEnd: PropTypes.bool,
    isWall: PropTypes.bool,
    distance: PropTypes.number
}

const mapStateToProps = (state) => {
    return {
        userAction: state.userAction.userAction,
        selectedGrids: state.selectedGrids
    }
}

export default connect(mapStateToProps, {
    selectGrid: selectGrid,
    selectAction: selectAction
})(Node);
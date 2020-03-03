import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectGrid, selectAction } from '../../actions/index';
import { selectStartNode, selectEndNode, selectTraffic, testAction } from '../../userActions/userActions';
import "./Node.css";

//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {

    state = {
        iconName: "",
        isHovered: false
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
                this.props.selectAction(selectStartNode); //switch action to select end node
            }
        }
        /* else if(this.props.userAction === selectTraffic){
            this.props.updateState(this.props.row, this.props.column, this.props.userAction);
        } */
        else if(this.props.userAction === testAction){
            //alert("you clicked on me");
            console.log(this.props.distance);
            console.log("Prev Node: ", this.props.prevNode);

        }

    }

    //check out the event listener on mousemove or onmouseenter
    mouseDownEvent = (e) => {
        //e is our event
        //we can do e.preventDefault()

        /* if(this.props.userAction === selectTraffic){
            this.props.updateState(this.props.row, this.props.column, this.props.userAction);
        } */

        
        this.setState({isHovered: true}); //Set isHovered to true
        //Set focus to be on the current element that the user is hovering on top of with their mouse
        document.getElementById(`node-${this.props.row}-${this.props.column}`).focus();
        //console.log(this.state.isHovered);

    }

    mouseOutEvent = (e) => {
        this.setState({isHovered: false});
        //console.log(this.state.isHovered);
    }

    pressDownKey = (e) => {
        //e.preventDefault();
        
        if(this.state.isHovered && e.key.toLowerCase() === 'w'){
            if(this.props.userAction === selectTraffic){
                this.props.updateState(this.props.row, this.props.column, this.props.userAction);
            }
        }

        /* console.log(this.props.row);
        console.log(this.props.column); */

        /*

            The keydown event for react will only work on an element if it is selected or "focused" on. It will not,
            worker if I just hover over any element. If I hover over a focused/selected element, that is when the keydown event will work.


        */
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
        else if(this.props.isWeight === true){
            iconName = selectTraffic;
        }
        
        return (
            <div 
                id={`node-${this.props.row}-${this.props.column}`}
                className="node" 
                onClick={this.clickButton}
                onMouseEnter={this.mouseDownEvent}
                onMouseLeave={this.mouseOutEvent}
                onKeyDown={this.pressDownKey}
                tabIndex="0"
                style={myStyle}
            >
                {/* <i class="fa fa-play node-icon"></i> */}
                <i className={iconName}></i>
                <span></span>
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
    distance: PropTypes.number,
    isWeight: PropTypes.bool
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
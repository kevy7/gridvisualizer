import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectGrid, selectAction } from '../../actions/index';
import { selectStartNode, selectEndNode, selectTraffic, testAction, selectWall } from '../../userActions/userActions';
import "./Node.css";

class Node extends Component {

    state = {
        iconName: "",
        isHovered: false
    }

    clickButton = () => {
        console.log(this.props);

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

        this.setState({isHovered: true}); //Set isHovered to true
        //Set focus to be on the current element that the user is hovering on top of with their mouse
        document.getElementById(`nodeParent-${this.props.row}-${this.props.column}`).focus();

        //Set the hovered over node icon to whatever the current action is
        if(this.props.isWall === false && this.props.isStart === false && this.props.isEnd === false && this.props.isWeight === false){
            if(document.getElementById(`icon-${this.props.row}-${this.props.column}`).className !== "node-wall"){
                document.getElementById(`icon-${this.props.row}-${this.props.column}`).className = this.props.userAction;
            }
            //document.getElementById(`icon-${this.props.row}-${this.props.column}`).className = this.props.userAction;
        }
    }

    mouseOutEvent = (e) => {
        this.setState({isHovered: false});

        //Remove the node icon if you're not hovering over a node icon
        if(this.props.isWall === false && this.props.isStart === false && this.props.isEnd === false && this.props.isWeight === false){
            //set another if condition here, if the icon does have a className called node-wall, then don't do anything
            if(document.getElementById(`icon-${this.props.row}-${this.props.column}`).className !== "node-wall"){
                document.getElementById(`icon-${this.props.row}-${this.props.column}`).className = "";
            }
            //document.getElementById(`icon-${this.props.row}-${this.props.column}`).className = "";
        }

    }

    pressDownKey = (e) => {
        //Add traffic/weight for the user
        if(this.state.isHovered && e.key.toLowerCase() === 'w'){
            if(this.props.userAction === selectTraffic){
                this.props.updateState(this.props.row, this.props.column, this.props.userAction);
            }
        }
        //add wall for the user
        else if(this.state.isHovered && e.key.toLowerCase() === 'e'){
            if(this.props.userAction === selectWall){
                this.props.updateState(this.props.row, this.props.column, this.props.userAction);
                //document.getElementById(`icon-${this.props.row}-${this.props.column}`).className = "";
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
        else if(this.props.isWeight === true){
            iconName = selectTraffic;
        }
        else if(this.props.isWall === true){
            iconName = "node-wall";
            //document.getElementById(`node-${this.props.row}-${this.props.column}`).className = "node node-wall";
        }
        
        //Consider adding another div component within this one for css styling purposes
        return (
            <div 
                id={`nodeParent-${this.props.row}-${this.props.column}`}
                className="node" 
                onClick={this.clickButton}
                onMouseEnter={this.mouseDownEvent}
                onMouseLeave={this.mouseOutEvent}
                onKeyDown={this.pressDownKey}
                tabIndex="0"
                style={myStyle}
            >
                <div 
                    id={`node-${this.props.row}-${this.props.column}`}
                    className="node"
                >
                    <i
                        id={`icon-${this.props.row}-${this.props.column}`}
                        className={iconName}
                    ></i>
                </div>
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
    isWeight: PropTypes.bool,
    fValue: PropTypes.number
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
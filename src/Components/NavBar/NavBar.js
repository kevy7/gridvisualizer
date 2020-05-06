import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./NavBar.css";
import { selectEndNode, selectTraffic, selectWall,  testAction } from '../../userActions/userActions';
import { selectAction, selectAlgorithm, selectMazeAlgo } from '../../actions/index';
import { BreadthFS, DebthFS, DijkstraAlgo, GreedyBFS, ATreeSearchAlgo, RecursiveDivision } from '../../userAlgo/userAlgo';
import TutorialModal from "../TutorialModal/TutorialModal";

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    selectUserAction = () => {

        console.log(this.startAction.innerHTML);

        let node = this.startAction;

    }

    selectStartAction = () => {
        this.props.selectAction("fa fa-play node-icon"); //replace this with the selectStartNode user action
    }

    selectEndAction = () => {
        this.props.selectAction(selectEndNode);
    }

    selectTrafficAction = () => {
        this.props.selectAction(selectTraffic);
    }

    selectWallAction = () =>{
        this.props.selectAction(selectWall);
    }

    selectBFSAlgo = () => {
        this.props.selectAlgorithm(BreadthFS);
    }

    selectDFSAlgo = () => {
        this.props.selectAlgorithm(DebthFS);
    }

    selectDijkstraAlgo = () => {
        this.props.selectAlgorithm(DijkstraAlgo);
    }

    selectGreedyBFS = () => {
        this.props.selectAlgorithm(GreedyBFS);
    }

    selectATreeAlgo = () => {
        this.props.selectAlgorithm(ATreeSearchAlgo);
    }

    selectRecursiveDiv = () => {
        this.props.selectMazeAlgo(RecursiveDivision);
    }

    selectTest = () => {
        this.props.selectAction(testAction);
    }

    render(){
        
        return (
            //I think the TutorialModal is defaulted to be hidden
            <div className="NavBar">
                {/*<TutorialModal />*/}
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        {/*
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        */}
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            {/* <a className="navbar-item" href="https://bulma.io/">
                                Home
                            </a> */}
                            <div className="navbar-item has-dropdown is-hoverable">

                                <a className="navbar-link" >

                                    Action
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <div ref={(input) => {
                                        this.startAction = input
                                        }} 
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectStartAction}
                                    >
                                        <i className="fa fa-play node-icon-nav"></i>
                                        Start
                                    </div>

                                    <div ref={(input) => {
                                        this.endAction = input
                                        }} 
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectEndAction}

                                    >
                                        <i className="fa fa-stop node-icon-nav"></i>
                                        End
                                    </div>

                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectTrafficAction}
                                    >
                                        <i className="fa fa-car node-icon-nav"></i>
                                        Traffic
                                    </div>
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectWallAction}
                                    >
                                        <i className="fa fa-ban node-icon-nav"></i>
                                        Wall
                                    </div>
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectTest}
                                    >
                                        <i className="fa fa-car node-icon-nav"></i>
                                        Test Action
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" >
                                    Algorithms
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectBFSAlgo}
                                    >
                                        Breadth-First-Search
                                    </div>
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectDFSAlgo}
                                    >
                                        Debth-First-Search
                                    </div>
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectDijkstraAlgo}
                                    >
                                        Dijkstra's Algorithm
                                    </div>
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectGreedyBFS}
                                    >
                                        Greedy Best-First-Search
                                    </div>
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectATreeAlgo}
                                    >
                                        A* Algorithm
                                    </div>
                                </div>
                            </div>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" >
                                    Maze Algorithms
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <div
                                        className="navbar-item navItem-hover" 
                                        onClick={this.selectRecursiveDiv}
                                    >
                                        Recurive Division
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </nav>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAction: state.userAction.userAction
    }
}

export default connect(mapStateToProps, {
    selectAction: selectAction,
    selectAlgorithm: selectAlgorithm,
    selectMazeAlgo: selectMazeAlgo
})(NavBar);
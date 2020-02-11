import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./NavBar.css";
import { selectEndNode } from '../../userActions/userActions';
import { selectAction, selectAlgorithm } from '../../actions/index';
import { BreadthFS, DebthFS } from '../../userAlgo/userAlgo';

class NavBar extends Component {
    /*

        example of initializing state with constructor(props)

        constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
        }

    */

    constructor(props) {
        super(props);
    }

    selectUserAction = () => {

        console.log(this.startAction.innerHTML);

        let node = this.startAction;

    }

    selectStartAction = () => {
        //let node = this.startAction;
        this.props.selectAction("fa fa-play node-icon"); //replace this with the selectStartNode user action
    }

    selectEndAction = () => {
        this.props.selectAction(selectEndNode);
    }

    selectBFSAlgo = () => {
        this.props.selectAlgorithm(BreadthFS);
    }

    selectDFSAlgo = () => {
        this.props.selectAlgorithm(DebthFS);
    }

    render(){
        
        return (
            <div className="NavBar">

                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
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
                                </div>
                            </div>

                            <div className="navbar-item has-dropdown is-hoverable">

                                <a className="navbar-link" >
                                    Algorithm
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
                                </div>
                            </div>



                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                            <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                <span>
                                    Tweet
                                </span>
                                </a>
                            </p>
                            <p className="control">
                                <span className="button is-primary" onClick={this.selectUserAction}>Download</span>
                            </p>
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
    selectAlgorithm: selectAlgorithm
})(NavBar);
import React, { Component } from 'react';
import { connect } from 'react-redux';

//import actions here
import { selectAction } from '../../actions/index';

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
        //this.props.selectAction()

        //Take the value of the html element and pass it into the selectAction function
        //Look up how to use dom refs with react
        let node = this.startAction;

        console.log(node.innerHTML);
        console.log(this.endAction.innerHTML);

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
                                    }} className="navbar-item" >
                                        <i class="fas fa-play node-icon"></i>
                                        Start
                                    </div>

                                    <div ref={(input) => {
                                        this.endAction = input
                                    }} className="navbar-item" >
                                        <i class="fas fa-stop node-icon"></i>
                                        End
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                            <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                <span className="icon">
                                    <i className="fab fa-twitter"></i>
                                </span>
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
    selectAction: selectAction
})(NavBar);
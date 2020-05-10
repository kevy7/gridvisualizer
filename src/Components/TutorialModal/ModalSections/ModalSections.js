import React, { Component } from 'react';
import './ModalSections.css';

class ModalSections extends Component {
    render(){
        return (
            <div className="content">
                {/*<h2>Title</h2>*/}
                <p>Hi, welcome to my pathfinding visualization app that was heavily inspired by Clément Mihailescu. With this website, you have three main tabs to use below.</p>
                {/* Place image here */}

                <ul>
                    <li>Action</li>
                    <ul>
                        <li>Your list of available actions to choose from. i.e. Start action is used to select a starting node.</li>
                    </ul>
                    <li>Algorithms</li>
                    <ul>
                        <li>Contains the list of available pathfinding algorithms to choose.</li>
                    </ul>
                    <li>Maze Algorithms</li>
                    <ul>
                        <li>Contains the list of available maze generation algorithms to choose.</li>
                    </ul>
                </ul>

            </div>
        )
    }
}

export default ModalSections;
import React, { Component } from 'react';
import './ModalSections.css';

class ModalSections extends Component {
    render(){
        return (
            <div className="content">
                <h2>Title</h2>
                <p>Hi welcome to my pathfinding visualization app that was heavily inspired by Clément Mihailescu. With this website, you have three main tabs to use below.</p>
                {/* Place image here */}

                <ul>
                    <li>Action</li>
                    <ul>
                        <li>Start</li>
                        <li>End</li>
                        <li>Traffic</li>
                        <li>Wall</li>
                    </ul>
                    <li>item 2</li>
                </ul>

            </div>
        )
    }
}

export default ModalSections;
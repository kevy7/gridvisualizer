import React, { Component } from 'react';
import startAndEndImg from '../tutorialImages/startAndEnd.png'; //imported image

class ModalSections2 extends Component {
    render(){
        return (
            <div className="sections">
                <div className="content">
                    <h3>Getting started</h3>
                    <p>The defualt action will always be the start action. 
                        First, select and press on any square in the grid. 
                        After a square is selected, you will see the start icon displayed on the grid. 
                        Now, after selecting a starting square, your action will automatically switch to the stop action. 
                        Select any square to be your end destination. You will then see a stop icon displayed on your selected square.
                    </p>
                    {/* Place tutorial image here */}

                </div>
            </div>
        )
    }
}

export default ModalSections2;
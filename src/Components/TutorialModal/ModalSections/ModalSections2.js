import React, { Component } from 'react';
import startAndEndImg from '../tutorialImages/startAndEnd.png'; //imported image
import runAlgo from '../tutorialImages/RunAlgo.png';

class ModalSections2 extends Component {
    render(){
        return (
            <div className="sections hide-section">
                <div className="content">
                    <h3>Getting started</h3>
                    <p> First, select and click on any square in the grid to be your starting node.
                        Now, after selecting a starting square, your action will automatically switch to the stop action. 
                    </p>

                    <p>
                        Finally, select any square to be your end destination. You will then see a stop icon displayed on your selected square.
                        See example of the end result below.
                    </p>
                    {/* Place tutorial image here */}
                    {/* how to import an image
                    <img 
                        className={styles.projectImage}
                        src={state.image}
                    />
                    */}
                    <img
                        className="tutorialImage"
                        src={startAndEndImg}
                    />
                    <p>Finally, click on the "Run (Algorithm Name Here)" button to see an animation of your selected alrogrithm.</p>
                    <img 
                        className="tutorialImage"
                        src={runAlgo}
                    />

                </div>
            </div>
        )
    }
}

export default ModalSections2;
import React, { Component } from 'react';
import startAndEndImg from '../tutorialImages/startAndEnd.png'; //imported image
import runAlgo from '../tutorialImages/RunAlgo.png';

class ModalSections2 extends Component {
    render(){
        return (
            <div className="sections">
                <div className="content">
                    <h3>Getting started</h3>
                    <p> First, select and click on any square in the grid. 
                        After a square is selected, you will see the start icon displayed on the grid. 
                        Now, after selecting a starting square, your action will automatically switch to the stop action. 
                        Select any square to be your end destination. You will then see a stop icon displayed on your selected square.
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
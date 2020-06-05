import React, { Component } from 'react';

class ModalSections3 extends Component {
    render(){
        return (
            <div className="sections hide-section">
                <div className="content">

                    <h3>Selecting Walls and Wieghted Nodes (traffic)</h3>
                    <p>Selecting walls will stop an algorithm from using nodes as a path and can encourge alternative routes.</p>
                    

                    <p>Selecting weighted nodes (traffic), will encourage weighted algorithms to avoid high traffic nodes.</p>
                    <p>Unlike walls, alrogithms can still use traffic nodes as a path, but only if it leads to the shortest possible path.</p>

                </div>

            </div>
        )
    }
}

export default ModalSections3;
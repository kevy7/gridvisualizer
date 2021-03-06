import React, { Component } from 'react';

class ModalSections3 extends Component {
    render(){
        return (
            <div className="sections hide-section">
                <div className="content">

                    <h3>Selecting Walls and Wieghted Nodes (traffic)</h3>
                    <p>Selecting walls will stop an algorithm from using nodes as a path and can encourage alternative routes. Follow the steps below to select walls.</p>
                    <ul>
                        <li>Select the Wall action.</li>
                        <li>Then, hover over to any nodes and press/hold down the 'e' key. While hovering, nodes will be selected as walls.</li>
                    </ul>

                    <p>Selecting weighted nodes (traffic), will encourage weighted algorithms to avoid those nodes.
                    Unlike walls, alrogithms can still use traffic nodes as a path but only if it leads to the shortest possible path.
                    </p>
                    <ul>
                        <li>Select the Traffic action.</li>
                        <li>Then, hover over to any nodes and press/hold down the 'w' key. While hovering, nodes will be selected as traffic nodes.</li>
                    </ul>

                </div>

            </div>
        )
    }
}

export default ModalSections3;
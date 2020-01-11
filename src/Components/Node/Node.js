import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Styles from './Node.module.css';


//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {
    render(){
        return (
            <div className="Node">

            </div>
        )
    }
}

Node.propTypes = {
    column: PropTypes.number,
    row: PropTypes.number,
    startRow: PropTypes.number,
    startColumn: PropTypes.number,
    isVisited: PropTypes.bool,
    prevNode: PropTypes.object
}

export default Node;
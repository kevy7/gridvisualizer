import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Node.module.css';


//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {
    render(){
        return (
            <div className={styles.node}>

            </div>
        )
    }
}

Node.propTypes = {
    row: PropTypes.number,
    column: PropTypes.number,
    startRow: PropTypes.number,
    startColumn: PropTypes.number,
    isVisited: PropTypes.bool,
    prevNode: PropTypes.object
}

export default Node;
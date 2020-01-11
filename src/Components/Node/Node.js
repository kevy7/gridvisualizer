import React, {Component} from 'react';
import PropTypes from 'prop-types';


//This will be our nodes, and each node will be displayed via the Grid Component
class Node extends Component {
    render(){
        return (
            <div className="Node">

            </div>
        )
    }
}

/*

PropTypes example
IngredientListContainer.propTypes = {
    ingredients: PropTypes.array
};


row: row,
            column: column,
            startRow: undefined,
            startColumn: undefined,
            isVisited: false,
            prevNode: undefined

*/

Node.propTypes = {
    column: PropTypes.number,
    row: PropTypes.number
}

export default Node;
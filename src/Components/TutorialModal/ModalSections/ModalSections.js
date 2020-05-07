import React, { Component } from 'react';
import './ModalSections.css';

class ModalSections extends Component {
    render(){
        return (
            <div className="modalSections">
                <p>{this.props.modalPara}</p>
            </div>
        )
    }
}

export default ModalSections;
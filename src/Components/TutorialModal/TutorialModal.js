import React, { Component } from 'react';
import './TutorialModal.css';
import ModalSections from './ModalSections/ModalSections';

class TutorialModal extends Component {

    render(){
        return (
            <div className="tutorialModal">
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Tutorial</p>
                            <button className="delete" aria-label="close"></button>
                        </header>

                        <section className="modal-card-body">
                            
                            {/* Page 1 of modal */}
                            <ModalSections 
                                modalPara="this is my paragraph"
                            />
                            {/* Page 2 of modal */}


                        </section>

                        <footer className="modal-card-foot">
                            <button className="button is-success">Save changes</button>
                            <button className="button">Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default TutorialModal;
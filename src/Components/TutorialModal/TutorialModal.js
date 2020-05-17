import React, { Component } from 'react';
import './TutorialModal.css';
import ModalSections from './ModalSections/ModalSections';
import ModalSections2 from './ModalSections/ModalSections2'; //page 2

class TutorialModal extends Component {

    state = {
        index: 0 //index of carousel is going to start at 1
    }

    //add function for buttons here
    pressNext = () => {
        //use document.getElementsByClassName("sections")
        //This should return an array of all elements with the classname sections
    }

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
                            
                            {/* Page 1 of modal - best way to hide these? */}
                            <ModalSections />
                            {/* Page 2 of modal */}
                            <ModalSections2 />


                        </section>

                        <footer className="modal-card-foot">
                            <div className="field is-grouped is-grouped-right">
                                {/* <button className="button is-success">Save changes</button>
                                <button className="button">Cancel</button> */}
                                <button class="button">Prev</button>
                                <button class="button">Next</button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default TutorialModal;
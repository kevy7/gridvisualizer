import React, { Component } from 'react';
import './TutorialModal.css';
import ModalSections from './ModalSections/ModalSections';
import ModalSections2 from './ModalSections/ModalSections2'; //page 2
import ModalSections3 from './ModalSections/ModalSections3'; //page 3
//import { thisTypeAnnotation } from '@babel/types';

class TutorialModal extends Component {

    state = {
        index: 0
    }

    pressClose = () => {

        let tutModal = document.getElementById("tutModal");
        tutModal.classList.remove('is-active'); //This works
        
    }

    pressPrev = () => {
        this.displaySection(this.state.index += -1);
    }

    pressNext = () => {
        this.displaySection(this.state.index += 1);
    }

    displaySection = (n) => {
        let sections = document.getElementsByClassName("sections");
        
        if(n < 0){
            this.state.index = sections.length-1;
        }

        if(n > sections.length-1){
            this.state.index = 0;
        }

        for (var a = 0; a < sections.length; a++){
            sections[a].style.display = "none";
        }

        //sections[this.state.index].className = "section";
        sections[this.state.index].style.display = "block";
    }

    render(){
        return (
            <div className="tutorialModal">
                <div className="modal" id="tutModal"> {/* create a function to deactivate this modal */}
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Tutorial</p>
                            <button className="delete" aria-label="close" onClick={this.pressClose}></button>
                        </header>

                        <section className="modal-card-body">
                            
                            {/* Page 1 of modal */}
                            <ModalSections />
                            {/* Page 2 of modal */}
                            <ModalSections2 />
                            {/* Page 3 of modal */}

                        </section>

                        <footer className="modal-card-foot">
                            <div className="field is-grouped is-grouped-right">
                                {/* <button className="button is-success">Save changes</button>
                                <button className="button">Cancel</button> */}
                                <button class="button" onClick={this.pressPrev}>Prev</button>
                                <button class="button" onClick={this.pressNext}>Next</button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default TutorialModal;
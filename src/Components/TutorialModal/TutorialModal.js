import React, { Component } from 'react';
import './TutorialModal.css';
import ModalSections from './ModalSections/ModalSections';
import ModalSections2 from './ModalSections/ModalSections2'; //page 2
import { thisTypeAnnotation } from '@babel/types';

class TutorialModal extends Component {

    state = {
        index: 0 //index of carousel is going to start at 1
    }

    //add function for buttons here
    pressPrev = () => {
        this.displaySection(this.state.index += -1); //Will either add by one or subtract by one
        //console.log("you pressed on me");
    }

    

    displaySection = (n) => {
        //console.log(this.state.index);
        let sections = document.getElementsByClassName("sections");
        
        if(n < 0){
            this.state.index = sections.length-1;
        }

        if(n > sections.length-1){
            this.state.index = 0;
        }

        for (var a = 0; a < sections.length; a++){
            //sections[a].className = "section hide-section";
            //find a way to just replace the className instead //.hide-section
            sections[a].style.display = "none";
            console.log(sections[a].className);
        }

        //sections[this.state.index].className = "section";
        sections[this.state.index].style.display = "block";


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
                                <button class="button" onClick={this.pressPrev}>Prev</button>
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
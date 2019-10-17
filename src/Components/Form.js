import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// Component to collect and transfer user data to firebase database:
// Logical flow:
    // - User data (comment, number of kills, and gif selection) are all stored to state
    // - On submit:
        // (1) user data in state is pushed to firebase
        // (2) user inputs in state are all reset
        // (3) page scrolls to comment section

    // - Gif Modal:
        // - Button click will toggle Gif Modal on/off


class Form extends Component {
    constructor(){
        super();
        this.state = {
            plantComment: '',
            killCount: 0,
            selectedGif: '',
            inputLinkClicked: false
        };

        this.gifElement = React.createRef();
    }

    // (1) When user clicks on "Gif" button, state of 'inputLinkClicked' is turned to NOT-false and Gif Modal is rendered to page
    // (2) When user clicks on 'close' icon in GifFinder, the props that carries a reference to toggleGifModal is called, which ultimately toggles the state of inputLinkClicked
    toggleGifModal = (event) => {
        event.preventDefault();
        this.setState({
            // using the '!' (not) logical operator 
            inputLinkClicked: !this.state.inputLinkClicked
        })
    }

    // Receiving user Gif selection from GifFinder Component and storing in state
    getGifUrlFromChildComponent = (gifUrl) => {
        this.setState({
            selectedGif: gifUrl
        })
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // error handling to ensure User input fills out all fields 
        if (this.state.plantComment === "" || this.state.killCount === 0 || this.state.selectedGif === "") {
            alert("Fill out the form you murderer!")
        } else {
            // 1) user input is pushed to firebase database
            // 2) state is reset
            // 3) page scrolls to comments section
            const dbRef = firebase.database().ref();
            dbRef.push({
                comment: this.state.plantComment,
                count: this.state.killCount,
                gif: this.state.selectedGif,
            });
            this.setState({ plantComment: "", killCount: 0 });
            this.moveToCommentSection();
            this.setState({ selectedGif: '' });
        }
    }

    killCount = (event) => {
        event.preventDefault();
        this.setState({
            killCount: this.state.killCount + 1,
        })
    }

    moveToCommentSection = () => {
        scroller.scrollTo('comments', {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuint",
        });
    }
    
    render() {
        return (
            <div className="wrapper">
                <div className="formContainer">
                    <h4>Write the dirt here.</h4>
                    <div className="gifPreviewContainer">
                        <p className="gifPreviewTitle">gif preview</p>
                        <div className="selectedGifContainer">
                            <img src={this.state.selectedGif} />
                        </div>   
                    </div>
                	<form>
                        <label className="visuallyHidden">Write your message here</label>
                        <input 
                            onChange={this.handleChange}
                            name="plantComment"
                            type="text"
                            value={this.state.plantComment}
                            placeholder="Enter message here"
                            className="messageInput"
                        />
                        <button onClick={this.toggleGifModal} className='gifModal'>Find a Gif</button>

                	        {
                            // conditional boolean (truthy) expression using '&& operator' to toggle modal on/off
                	            this.state.inputLinkClicked && 
                
                            <GifFinder getGifUrlToParentComponent={this.getGifUrlFromChildComponent} 
                                toggle={this.toggleGifModal}
                                ref={this.gifElement} />
                	        }        

                        <button onClick={this.killCount} className="killCount">
                            # of Kills <span className="killCount">x{this.state.killCount}</span>
                        </button>
                        
                        <button onClick={this.handleSubmit} className="submit">Submit</button>        
                	</form>
                </div> 
            </div>
        );
    }
}


export default Form;
import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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

    toggleGifModal = (event) => {
        event.preventDefault();
        this.setState({
            inputLinkClicked: !this.state.inputLinkClicked
        })
    }

    gifCallbackFunction = (gifUrl) => {
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
        if (this.state.plantComment === "" || this.state.killCount === 0 || this.state.selectedGif === "") {
            alert("Fill out the form you murderer!")
        } else {
            const dbRef = firebase.database().ref();
            dbRef.push({
                comment: this.state.plantComment,
                count: this.state.killCount,
                gif: this.state.selectedGif,
            });
            this.setState({ plantComment: "", killCount: 0 });
            this.moveToSection();
            this.setState({ selectedGif: '' });
        }
        
        
        // this.gifElement.current.emptySearch();
    }

    incrementCount = (event) => {
        event.preventDefault();
        this.setState({
            killCount: this.state.killCount + 1,
        })
    }

    moveToSection = () => {
        scroller.scrollTo('comments', {
            duration: 1000,
            delay: 100,
            smooth: "easeInOutQuint",
        });
        
    }
    
    render() {
        const { selectedGif } = this.state
        return (
            <div className="wrapper">
                <div className="formContainer">
                    <h4>Write the dirt here.</h4>
                    <div className="gifPreviewContainer">
                        <p className="gifPreviewTitle">gif preview</p>
                        <div className="selectedGifContainer">
                            <img src={selectedGif} />
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
                	            this.state.inputLinkClicked && 
                
                	            <GifFinder 
                	            toggle={this.toggleGifModal}
                	            gifParentCallback={this.gifCallbackFunction} 
                	            ref={this.gifElement} />
                	        }        

                        <button onClick={this.incrementCount} className="killCount">
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
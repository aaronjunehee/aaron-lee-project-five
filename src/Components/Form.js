import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';
import leaf from '../images/leaf.svg';
import gifIcon from '../images/gifIcon.svg';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import plant1 from '../images/plant1.png';

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
        scroller.scrollTo('test');
        
    }
    
    render() {
        const { selectedGif } = this.state
        return (
            <div className="wrapper formContainer">
                <h4 className="instruction">Write the dirt here.</h4>
                <div className="gifPreviewContainer">
                    <p>gif preview</p>
                    <div className="gifPreview">
                        <img src={selectedGif} />
                    </div>
                    
                </div>
            	<form>
                    <label className="visuallyHidden">Write your message here</label>
                    <input 
                        // rows='3'
                        // cols='20'
                        onChange={this.handleChange}
                        name="plantComment"
                        type="text"
                        value={this.state.plantComment}
                        placeholder="Enter message here"
                        className="confessionInput"
                    />
                    <button onClick={this.toggleGifModal} className='gifIcon'>
                        {/* <img src={gifIcon} /> */}Find a Gif
                    </button>
            	        {
            	            this.state.inputLinkClicked && 
            
            	            <GifFinder 
            	            toggle={this.toggleGifModal}
            	            gifParentCallback={this.gifCallbackFunction} 
            	            ref={this.gifElement} />
            
            	        }        
                    <button onClick={this.incrementCount} className="increment">Number of Kills <span className="killCount">x{this.state.killCount}</span></button>
            	        

                        <div className="submitButtonContainer">
                            <button onClick={this.handleSubmit} className="submit">Submit</button>
                        </div>
                    
            	</form>
                
            </div>
        );
    }
}


export default Form;
import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';
import leaf from '../images/leaf.svg';
import gifIcon from '../images/gifIcon.svg';
import * as Scroll from 'react-scroll';
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
        scroller.scrollTo('test');
        
    }
    
    render() {
        const { selectedGif } = this.state
        return (
            <div className="wrapper">
            	<form>
            	    <div className="flexContainer top">
            	        <label className="visuallyHidden">Confession:</label>
                        <p className="instruction">Write the dirt here.</p>
            	        {/* <div className="userIcon">
            	            <img src={leaf} />
            	        </div> */}
            	        <textarea 
            	            rows='3'
            	            cols='20'
            	            onChange={this.handleChange}
            	            name="plantComment"
            	            type="text"
            	            value={this.state.plantComment}
            	            placeholder="Enter message here"
            	            className="confessionInput"
            	        ></textarea>
            	    {/* <div className="gifPreview">
            	        <img src={selectedGif}/>
            	    </div> */}
            	    </div>
            
            	    <div className="flexContainer bottom">
            	        <button onClick={this.toggleGifModal} className='gifIcon'>
            	            <img src={gifIcon} />
            	        </button>
            	        {
            	            this.state.inputLinkClicked && 
            
            	            <GifFinder 
            	            toggle={this.toggleGifModal}
            	            gifParentCallback={this.gifCallbackFunction} 
            	            ref={this.gifElement} />
            
            	        }
            	        
            	        
            	        
            
            	        <div className="bottomRight">
            	            <p className="killCount">🥀x{this.state.killCount}</p>
            	            <button onClick={this.incrementCount} className="increment">Number of Kills</button>
            
            	            <button onClick={this.handleSubmit}  className="submit">Submit</button>
            
            	        </div>
            	    </div>
            	</form>
            </div>
        );
    }
}


export default Form;
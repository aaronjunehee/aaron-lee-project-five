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
        const dbRef = firebase.database().ref();
        dbRef.push({
            comment: this.state.plantComment,
            count: this.state.killCount,
            gif: this.state.selectedGif,
        });
        this.setState({ plantComment: "", killCount: 0 });
        this.moveToSection();
        
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
        console.log("hello");
        
    }
    
    render() {
        return (
            <form>
                <div className="flexContainer top">
                    <label className="visuallyHidden">Confession:</label>
                    <div className="userIcon">
                        <img src={leaf} />
                    </div>
                    <textarea 
                        rows='3'
                        cols='10'
                        onChange={this.handleChange}
                        name="plantComment"
                        type="text"
                        value={this.state.plantComment}
                        placeholder="write a confession"
                        className="confessionInput"
                    ></textarea>
                </div>
               

                <div className="flexContainer bottom">
                    <button onClick={this.toggleGifModal} className='gifIcon'>
                        <img src={gifIcon} />
                    </button>
                    {
                        this.state.inputLinkClicked && 

                        <GifFinder 
                        toggle={this.toggleGifModal}
                        gifParentCallback={this.gifCallbackFunction} ref={this.gifElement} />

                    }
                    
                    
                    

                    <div className="bottomRight">
                        <p className="killCount">🥀x{this.state.killCount}</p>
                        <button onClick={this.incrementCount} className="increment">Number of Kills</button>

                        <button onClick={this.handleSubmit}  className="submit">Submit</button>

                    </div>
                </div>
            </form>
        );
    }
}


export default Form;
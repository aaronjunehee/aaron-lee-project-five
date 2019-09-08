import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';
import leaf from '../images/leaf.svg';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            plantComment: '',
            killCount: 0,
            selectedGif: '',
        };

        this.gifElement = React.createRef();
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
        
        this.gifElement.current.emptySearch();
    }

    incrementCount = (event) => {
        event.preventDefault();
        this.setState({
            killCount: this.state.killCount + 1,
        })
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
                {/* <label class="visuallyHidden">Kill Count:</label>
                <input
                    onChange={this.handleChange}
                    name="killCount"
                    type="number"
                    value={this.state.killCount}
                    min="1"
                    max="100"
                /> */}

                <div className="flexContainer bottom">
                    <GifFinder gifParentCallback={this.gifCallbackFunction} ref={this.gifElement}/>
                    <p className="killCount">🥀x{this.state.killCount}</p>
                    <button onClick={this.incrementCount} className="increment">Number of Kills</button>
                    <button onClick={this.handleSubmit} className="submit">Submit</button>
                </div>
            </form>
        );
    }
}


export default Form;
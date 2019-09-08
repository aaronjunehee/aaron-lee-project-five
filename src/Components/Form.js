import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';
import virus from '../images/virus.svg';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            plantComment: '',
            killCount: '',
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
        this.setState({ plantComment: "", killCount: "" });
        
        this.gifElement.current.emptySearch();
    }
    
    render() {
        return (
            <form>
                <div class="flexContainer">
                    <label className="visuallyHidden">Confession:</label>
                    <div className="userIcon">
                        <img src={virus} />
                    </div>
                    <input 
                        onChange={this.handleChange}
                        name="plantComment"
                        type="text"
                        value={this.state.plantComment}
                        placeholder="write a confession"
                        className="confessionInput"
                    />
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
                <GifFinder gifParentCallback={this.gifCallbackFunction} ref={this.gifElement}/>
                <button onClick={this.handleSubmit} className="submit">Submit</button>
            </form>
        );
    }
}


export default Form;
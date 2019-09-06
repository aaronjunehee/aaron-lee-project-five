import React, { Component } from 'react'; 
import firebase from '../firebase';
import GifFinder from './GifFinder';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            plantComment: '',
            killCount: '',
        };
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
        });
        this.setState({ plantComment: "" })
    }
    
    render() {
        return (
            <form>
                <label>Confession:</label>
                <input 
                    onChange={this.handleChange}
                    name="plantComment"
                    type="text"
                    value={this.state.plantComment}
                />
                <label>Kill Count:</label>
                <input
                    onChange={this.handleChange}
                    name="killCount"
                    type="number"
                    value={this.state.killCount}
                    min="1"
                    max="100"
                />
                <GifFinder />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}


export default Form;
import React, { Component } from 'react'; 
import firebase from '../firebase';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
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
            comment: this.state.userInput,
            count: this.state.killCount,
        });
        this.setState({ userInput: "" })
    }
    
    render() {
        return (
            <form>
                <label>Confession:</label>
                <input 
                    onChange={this.handleChange}
                    name="userInput"
                    type="text"
                    value={this.state.userInput}
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
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}


export default Form;
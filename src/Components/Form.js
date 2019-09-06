import React, { Component } from 'react'; 
import firebase from '../firebase';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            userInput: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        console.log(this.state.userInput);
        dbRef.push(this.state.userInput);
        this.setState({ userInput: "" })
    }
    
    render() {
        return (
            <form>
                <label>Confession</label>
                <input 
                    onChange={this.handleChange}
                    name="userInput"
                    type="text"
                    value={this.state.userInput}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}


export default Form;
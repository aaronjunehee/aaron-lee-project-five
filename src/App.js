import React, { Component } from 'react';
import firebase from './firebase';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memorial: [],
    }
  }
  
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      console.log(response.val());
    })

  }
  
  
  render() {
    return (
      <ul className="App">
        {this.state.memorial.map((comment) => {
          return <li>{comment}</li>
        })}
      </ul>
    );
  }
}

export default App;

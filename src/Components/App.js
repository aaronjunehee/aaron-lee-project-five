import React, { Component } from './node_modules/react';
import firebase from '../firebase';
import '../styles/App.scss';

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
        <li>Hello, World!</li>
      </ul>
    );
  }
}

export default App;

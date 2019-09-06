import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import firebase from '../firebase';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memorial: [],
    };
  }
  
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const comment = response.val();
      console.log(comment);
      
      const newState = [];
      console.log(newState);

      for (let key in comment){
        newState.push(comment[key]);
      }
      this.setState({
        memorial: newState,
      })
    })

  }
  
  
  render() {
    return (
      <div>
        <Header />
        <main>
          <Form />
          <ul className="App">
            {this.state.memorial.map((plantComment, index) => {
              return <li key={index}>{plantComment}</li>
            })}
            <li>Hello, World!</li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;

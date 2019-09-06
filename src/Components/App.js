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
      const comments = response.val();
      console.log(comments);
      
      const newState = [];
      console.log(newState);

      for (let key in comments){
        newState.push({
          key: key, 
          name: comments[key]
        });
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
            {this.state.memorial.map(memorial => {
              return ( 
                <li key={memorial.key}>{memorial.name.comment} {memorial.name.count}</li>
              )
            })}
            <li>Hello, World!</li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;

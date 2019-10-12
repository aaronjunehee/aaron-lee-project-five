import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Form from './Form';
import UserComment from './UserComment';
import firebase from '../firebase';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userComments: [],
    };
  }
  
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const comments = response.val();
      
      const newState = [];

      for (let key in comments){
        newState.push({
          key: key, 
          content: comments[key]
        });
      }
      this.setState({
        userComments: newState,
      })
    })

  }
  
  
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <main>
          <section className="formSection" name="form">
            <Form />
          </section>
          <section className="commentSection" name="comments">
            <div className="wrapper">
              <ul className="userCommentsContainer">
                {this.state.userComments.map(userComments => {
                  return ( 
                    <UserComment 
                      key={userComments.key}
                      message={userComments.content.comment}
                      numOfKills={userComments.content.count}
                      gif={userComments.content.gif}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
        </main>
        {/* add a footer here */}
      </div>
    );
  }
}

export default App;

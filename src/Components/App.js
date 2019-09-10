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
      console.log(comments);
      
      const newState = [];
      console.log(newState);

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
        <div className="wrapper">
          <Header />
          <main name="main">
            <section className="formSection">
              <Form />
            </section>
            <section name="test" class="userComments">
              <ul className="userCommentContainer">
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
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

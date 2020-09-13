import React, { Component } from 'react';
import './App.css';
import StyledFireBaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase"

firebase.initializeApp({
    apiKey: "AIzaSyBE-JpKqfubFYpOKX_sMNtaKLYGWS7gk5o",
    authDomain: "my-a-4c395.firebaseapp.com",
    databaseURL: "https://my-a-4c395.firebaseio.com",
    projectId: "my-a-4c395",
    storageBucket: "my-a-4c395.appspot.com",
    messagingSenderId: "503489561455",
    appId: "1:503489561455:web:aae8295783598933501e9a"
})

class App extends Component {
  state = {isSignedIn : false}

  uiConfig = {

    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
      console.log("user",user)
    })
  }
  render() {
      return (
        <div className = "App">
          {this.state.isSignedIn ? (
            <span>
            <div>Signed In! </div>
            <button onClick = {() => firebase.auth().signOut()} > Sign out! </button>
            <h1> Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt ="profile picture"
              src = {firebase.auth().currentUser.photoURL}
              />

            </span>
          ) : (

            <StyledFireBaseAuth
            uiConfig = {this.uiConfig}
            firebaseAuth = {firebase.auth()}
            />

          )}

          </div>
      )
  }
}

export default App;

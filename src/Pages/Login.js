import React, {Component} from 'react';
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

 class Login extends Component {
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
            <h1 className = "text-x1 text-center font-bold mb-3"> Welcome {firebase.auth().currentUser.displayName}</h1>
            <div> Signed In! </div>
            <button onClick = {() => firebase.auth().signOut()} > Sign out! </button>
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

export default Login;
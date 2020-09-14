import React, { useState,useEffect } from "react";
import './App.css';
import StyledFireBaseAuth from "react-firebaseui/StyledFirebaseAuth";
import fire from "./firebase";
import Login from "./Components/Login";
import Home from "./Components/Home";
import "firebase/auth";

const App = () => {
	const [user,setUser] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [hasAccount, setHasAccount] = useState("");

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	}
	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
	}
	const handleLogin = () =>{
		clearErrors();
		fire
			.auth()
			.signInWithEmailAndPassword(email,password)
			.catch((err) => {
				switch(err.code){
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
					default:
						break;

				}
			});
	};
	const handleSignup = () =>{
		clearErrors();
		fire
			.auth()
			.createUserWithEmailAndPassword(email,password)
			.catch((err) => {
				switch(err.code){
					case "auth/email-alraedy-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
					default:
						setPassword(password);
						setEmail(email);
						break;
			}
			});
	};

	

	useEffect(() => {
		const authListener = () => {
		fire.auth().onAuthStateChanged(user=>{
			if(user){
				clearInputs();
				setUser(user);
			} else {
				setUser("");
			}
		});
	};
		authListener();
	},[]);

	return (
		<div className = "App">
			{user ? (
				<Home/> 
			):(	
				<Login 
				email = {email}
				setEmail = {setEmail}
				password = {password}
				setPassword = {setPassword}
				handleLogin = {handleLogin}
				handleSignup = {handleSignup}
				hasAccount = {hasAccount}
				setHasAccount = {setHasAccount}
				emailError = {emailError}
				passwordError = {passwordError}
			/>
			)}
		</div>

	);
};

export default App;

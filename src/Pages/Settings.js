import React, { useState } from "react";
import firebase from 'firebase';

const PasswordReset = () => {

 	const [email, setEmail] = useState("");
	const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
	const [error, setError] = useState(null);
	const [dispName, setDisplayName] = useState("");
	const [displayNameChange, setDisplayNameChange] = useState(false);
	const [dispErr, setdispError] = useState(null);

	const onChangeHandler = (event) => {
	const {name,value} = event.currentTarget;
		if(name === "userEmail"){
			setEmail(value);
		}
		else if(name === "dispName"){
			setDisplayName(value);
		}

	};

	const sendResetEmail = (event) =>{
		event.preventDefault();
		firebase.auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			setEmailHasBeenSent(true);
			setTimeout(()=>{setEmailHasBeenSent(false)},3000);
		})
		.catch(()=>{
		setError("Error resetting password");
		});
	};

	const resetDisplayName = (event) =>{
		event.preventDefault();
		setDisplayName(event.target.value);
		
		firebase.auth()
		.onAuthStateChanged(currentUser => {
		firebase.auth()
		.currentUser
		.updateProfile({
			displayName : dispName
		})
		.then(() => {
			setDisplayNameChange(true);
			setTimeout(()=>{setDisplayNameChange(false)},3000);
		})
		.catch(()=>{
		setdispError("Error changing Display Name");
		});
		})
	};

	return (	
			<div className="Settings">
          		<h1>Settings</h1>
          			<div>
          				<h2>Change your password</h2>
						<form action ="">
							{emailHasBeenSent && (<div>Email has been sent!</div>)}
								{error !== null && (<div>{error}</div>)}
										<label htmlFor ="userEmail" className ="w-full block">
											Send reset link to:  
										</label>

								<input
									type ="email"
									name= "userEmail"
									id="userEmail"
									value={email}
									placeholder="Input your email"
									onChange ={event => {onChangeHandler(event)}}
									
								/>
								<button
									onClick = {event => {
										sendResetEmail(event);
									}}
								>
								 Send me a reset link</button>
						</form>
					</div>
					<div>
						<h2>Change your display name </h2>
						<form action ="">
							{displayNameChange && (<div>Display Name changed!</div>)}
								{dispErr !== null && (<div>{dispErr}</div>)}
									<label htmlFor ="displayName" className ="w-full block">
										Display Name: 
										</label>

								<input
									type ="dispName"
									name= "dispName"
									id="dispName"
									value={dispName}
									placeholder="Input your name"
									onChange ={event => {onChangeHandler(event)}}
								/>
								<button
									onClick = {event => {resetDisplayName(event);						
									}}
								>
								 Change my display name</button>
						</form>
					</div>
      		</div>
			);
		

};

export default PasswordReset;
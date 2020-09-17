import React, { useState } from "react";
import firebase from 'firebase';


const PasswordReset = () => {

 	const [email, setEmail] = useState("");
	const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
	const [error, setError] = useState(null);	

	const onChangeHandler = (event) => {
	const {name,value} = event.currentTarget;
		if(name === "userEmail"){
			setEmail(value);
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
					
      		</div>
			);
		

};

export default PasswordReset;
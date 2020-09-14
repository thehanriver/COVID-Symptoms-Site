import React from 'react';

const Login = (props) => {
	const {email
		,setEmail
		,password
		,setPassword
		,handleLogin
		,handleSignup
		,hasAccount
		,setHasAccount
		,emailError
		,passwordError,} 
		= props;

	return(
		<section className="login">
			<div className = "loginContainter">
				<label>Username: </label>
				<input name ="text"
				 autofocus
				 required 
				 value={email}
			 	 onChange={e => setEmail(e.target.value)}/>

			<p className ="errorMsg">{emailError}</p>
				<label>Password: </label>
				<input name = "password" 
				autofocus
				required 
				value={password}
				onChange={e => setPassword(e.target.value)}/>
			 <p className = "errorMsg">{passwordError}</p>
			

			 <div className = "btnContainer">
			 	{!hasAccount ? (
			 		<>
			 			<button onClick = {handleLogin}>Sign In</button>
			 			<p>Don't have an account? <span onClick = {() => setHasAccount(!hasAccount)} > Sign up </span></p>
			 		</>
			 		):(
			 		<>
			 			<button onClick = {handleSignup}>Sign up</button>
			 			<p>Have an Account ? <span onClick={() => setHasAccount (!hasAccount)}> Sign In </span></p>
			 		</>
			 		)
			 	}
			 	 <p> or </p>
			 </div>
			</div>
		</section>
	);
};

export default Login;
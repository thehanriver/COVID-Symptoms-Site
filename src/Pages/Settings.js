import React, {Component } from "react";
import firebase from 'firebase';


export default class Settings extends Component {
 	
 	constructor(props) {
 		super(props);
 		this.state = {
 		formControls: {
 		email: {value:''},
 		displayName: {value:''}
 		}}
 	}
 	
 	handlePass = event =>{
 		const name = event.target.name;
 		const value = event.target.value;

 		this.setState({
 			formControls: {
 				...this.state.formControls,[name]: {...this.stateformControls[name]},value}
 		});
 	}

 	
	

	render() {
		const email =' ';
		return (	
			<div className="Settings">
          		<h1>Settings</h1>
          			<h2> Change your password (work in progress) </h2>
          			<input
          			 className = "Email"
            		 type="text"
            		 placeholder = "Input your email"
           			 onChange={this.state.formControls.email.value}
        			 />
        			 <button
        			 className = "" 
        			 onClick = {event => {firebase.auth().currentUser.sendPasswordResetEmail(this.state.formControls.email.value).then(function(){alert('Check your Email')}).catch(function(err){console.log(event)})}}
        			 >
        			 Send Reset Password
        			 </button>

          			<h2> Change your Display Name</h2>
          			<input
          			 className = "Email"
            		 type="text"
            		 placeholder = "Input your new name"
           			 onChange={this.state.formControls.email.value}
        			 />
        			 <button
        			 className = "" 
        			 onClick = {event => {firebase.auth().currentUser.sendPasswordResetEmail(this.state.formControls.email.value).then(function(){alert('Check your Email')}).catch(function(err){console.log(event)})}}
        			 >
        			 Change Display Name
        			 </button>
      		
      		</div>
			);
		}
}
   
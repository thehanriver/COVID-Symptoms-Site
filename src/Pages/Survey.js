import React, { Component } from "react";
export default class Home extends Component{
	render(){
		return(
			<div className="Survey">
          	<h1>Daily Symptom Screening</h1>
          	<p> Take the survey before you start your day </p>
			<iframe title= "Daily Survey" src="https://docs.google.com/forms/d/e/1FAIpQLSeXfOrno_4AgtRt40dwwKcAAntcI4ZFwcfwMFvjA40-z0NhSA/viewform?embedded=true" width="640" height="2312" frameborder="0" marginheight="0" marginwidth="0"></iframe>
			</div>

			);
		}
	}



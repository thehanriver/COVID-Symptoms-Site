import React, {Component} from "react";

export default class AdminDash extends Component {
	render() {
		return (	
			<div className="AdminDash">
          <h1>admin dashboard</h1>
          <p> Reported Symptoms Data Visualization </p>
          <iframe title = "Bar Graph" width="1008" height="622" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4aRX7-AdEJh3N8zZ5O_-U6-7PjL0D01pXw9lCXZYWg1BrwHRQBbYIw3vifPzPpCQrzeGbiC1L7Rn7/pubchart?oid=1422167781&amp;format=interactive"></iframe>
          <iframe title = "Pie Chart" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4aRX7-AdEJh3N8zZ5O_-U6-7PjL0D01pXw9lCXZYWg1BrwHRQBbYIw3vifPzPpCQrzeGbiC1L7Rn7/pubchart?oid=1766034756&amp;format=interactive"></iframe>

      		</div>
			);
		}
}
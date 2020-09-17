import React, { Component } from "react";

export default class NotAdmin extends Component {
  render() {
    return (
      <div className="Home">
          <h1>Not an Admin</h1>
          <p> Email hanmario@bu.edu to see if you can get admin status!</p>
      </div>
    );
  }
}
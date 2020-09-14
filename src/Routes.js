import React, {Component} from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from './Components/History';
import Login from "./Pages/Login";
import Home from "./Pages/Home";

export default class Routes extends Component {
	render() {
		return (
			<Router history ={history}>
			<Switch>
				<Route exact path = '/' component ={Home} />
				<Route path ="/Home" component ={Home}/>
				<Route path ="/Login" component ={Login}/>
			</Switch>
			</Router>

		)
	}
}
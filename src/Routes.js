import React, {Component} from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from './Components/History';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Survey from "./Pages/Survey";
import AdminDash from "./Pages/AdminDash";
import Settings from "./Pages/Settings";
import firebase from "firebase";
import PrivateRoute from "./Private";
import NotAdmin from "./Pages/NotAdmin";
export default class Routes extends Component {
	state = { loading: true, authenticated: false};
	componentWillMount() {
 		 firebase.auth().onAuthStateChanged(user => {
    		if (user) {
     		 this.setState({
       		 authenticated: true,
       		 loading: false
      		});
     		
   		} else {
      		this.setState({
        		authenticated: false,
        		loading: false,
        		
      		});
    	}
 		 });
 	}	 
	render() {

		const { authenticated, loading} = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    
		return (
		
			<Router history ={history}>
			<Switch>
				<Route exact path = '/' component ={Home} />
				<Route path ="/Home" component ={Home}/>
				<Route path ="/Login" component ={Login}/>
				<Route path ="/NotAdmin" component ={NotAdmin}/>
				<PrivateRoute path ="/Survey" component ={Survey} authenticated = {authenticated}/>
				<PrivateRoute path ="/AdminDash" component ={AdminDash} authenticated = {authenticated}/>
				<PrivateRoute path = "/Settings" component = {Settings} authenticated = {authenticated}/>

			</Switch>
			</Router>
		

		)
	}
}
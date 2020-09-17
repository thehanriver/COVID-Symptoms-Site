import React from "react";
import Routes from "./Routes";
import Navigation from "./Components/Nav";
import Cards from "./Components/Cards/Cards"
import Chart from "./Components/Chart/Chart"
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import {fetchData} from "./api";

class App extends React.Component{
	state ={
		data: {},
	}
	async componentDidMount(){

		const fetchedData = await fetchData();
		this.setState({data: fetchedData});
	}

	render(){
		const{data} = this.state;
		return(
			<div className= {styles.container}>
				<Navigation/>
				<Routes />
				<Cards data = {data} />
				<Chart  />
			</div>
		)
	}
}
	



export default App;



import React from "react";
import './App.css';
import Routes from "./Routes";
import Navigation from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
	return (
		<div className = "App">
			<Navigation/>
			<Routes />
		</div>
		);
}

export default App;

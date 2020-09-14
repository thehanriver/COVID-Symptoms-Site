import React from 'react';
//import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
	console.log(props);
	return (
		<Navbar bg ="dark" variant ="dark">
			<Navbar.Brand href =""> COVID-APP </Navbar.Brand>
			<Navbar.Collapse id ="basic-navbar-nav">
				<Nav className = "mr-auto">
					<Nav.Link href ="/Home"> Home </Nav.Link>
					<Nav.Link href ="/Login"> Login </Nav.Link>
					<Nav.Link href = "/Survey"> Survey </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default withRouter(Navigation);
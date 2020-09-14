import React from 'react';
import fire from '../firebase';

const handleLogout = () => {
		fire.auth().signOut();
	};

const Home = () => {
	return (
	<section className = "Home">
		<nav>
			<h2>Welcome!</h2>
			<button onClick = {handleLogout}>Logout</button>
		</nav>
	</section>

	);
};

export default Home;
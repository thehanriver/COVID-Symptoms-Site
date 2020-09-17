import React from 'react';
import firebase from 'firebase';

const getUID = () => {
	const user = firebase.auth().getInstance().getCurrentUser();

	if(user != null){

		return firebase.auth().currentUser.uid	}
}

export default getUID;
import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBE-JpKqfubFYpOKX_sMNtaKLYGWS7gk5o",
    authDomain: "my-a-4c395.firebaseapp.com",
    databaseURL: "https://my-a-4c395.firebaseio.com",
    projectId: "my-a-4c395",
    storageBucket: "my-a-4c395.appspot.com",
    messagingSenderId: "503489561455",
    appId: "1:503489561455:web:aae8295783598933501e9a"
  };

  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
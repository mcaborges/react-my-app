import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCaBskDYmG9kOfWNv8D3mL6T-MwRvMjV_I",
    authDomain: "react-my-app.firebaseapp.com",
    databaseURL: "https://react-my-app.firebaseio.com",
    projectId: "react-my-app",
    storageBucket: "react-my-app.appspot.com",
    messagingSenderId: "984424122717"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');

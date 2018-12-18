import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0Hnm78f-WKQUAYpiuD2-sUT7GnUmAdYo",
  authDomain: "my-project-1480342040423.firebaseapp.com",
  databaseURL: "https://my-project-1480342040423.firebaseio.com",
  projectId: "my-project-1480342040423",
  storageBucket: "my-project-1480342040423.appspot.com",
  messagingSenderId: "745048055710"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase

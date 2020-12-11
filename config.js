import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9sJIdKfKnI5wsomIaV3FAXd9Ancd-dZU",
    authDomain: "eventsapp-a6ca9.firebaseapp.com",
    databaseURL: "https://eventsapp-a6ca9.firebaseio.com",
    projectId: "eventsapp-a6ca9",
    storageBucket: "eventsapp-a6ca9.appspot.com",
    messagingSenderId: "750936583477",
    appId: "1:750936583477:web:c60ab4ee78619fa9bff07c"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

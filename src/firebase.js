import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-n3c7mlr_OuJjtgDyNxwhHFDhza4ELEs",
    authDomain: "clone-c83f6.firebaseapp.com",
    projectId: "clone-c83f6",
    storageBucket: "clone-c83f6.appspot.com",
    messagingSenderId: "253473031420",
    appId: "1:253473031420:web:a8db0c165327eb818ac379",
    measurementId: "G-VDJ8YY2V78"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
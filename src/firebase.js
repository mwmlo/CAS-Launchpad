import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCa8x7-QCJ7LmIPJH8Sg9HBl7To7HuKHQc",
    authDomain: "cas-launchpad.firebaseapp.com",
    databaseURL: "https://cas-launchpad.firebaseio.com",
    projectId: "cas-launchpad",
    storageBucket: "cas-launchpad.appspot.com",
    messagingSenderId: "27732308602",
    appId: "1:27732308602:web:a207291b9f35bb5ef801c3",
    measurementId: "G-S7XS2BGRRZ"
});

const db = firebaseApp.firestore();

export default db;
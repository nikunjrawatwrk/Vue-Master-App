import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA13uKjqWot-0ynWmIJoI0a6i8WFzpJzjQ",
  authDomain: "music-b3a32.firebaseapp.com",
  projectId: "music-b3a32",
  storageBucket: "music-b3a32.appspot.com",
  appId: "1:642701524762:web:8d8b2d03f56119ebca36a3",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };

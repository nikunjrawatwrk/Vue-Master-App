import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
const storage = firebase.storage();

const usersCollection = db.collection("users");

const songsCollection = db.collection("songs");

const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};

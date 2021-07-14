import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBIE8oBP9mtzmxA6HmnCH9kmQ_FsuFbMp8",
  authDomain: "cycle-app-b9da1.firebaseapp.com",
  projectId: "cycle-app-b9da1",
  storageBucket: "cycle-app-b9da1.appspot.com",
  messagingSenderId: "874070057713",
  appId: "1:874070057713:web:35486a2d10b756c431bf50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
export { storage, db };

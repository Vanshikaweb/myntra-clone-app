import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8pRNZw4mc368xzhqt4JcWsWzAJbW6eho",
  authDomain: "challenge-52bff.firebaseapp.com",
  projectId: "challenge-52bff",
  storageBucket: "challenge-52bff.appspot.com",
  messagingSenderId: "109679667043",
  appId: "1:109679667043:web:b106832adb22924b6f5556"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

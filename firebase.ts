// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkThy73Sajf7Hk-zezXpKxMjdQRNW5sDg",
  authDomain: "netflix-clone-db437.firebaseapp.com",
  projectId: "netflix-clone-db437",
  storageBucket: "netflix-clone-db437.appspot.com",
  messagingSenderId: "629338039187",
  appId: "1:629338039187:web:6dcbf1c94f8ef2a01ebe66",
  measurementId: "G-HXHTXYG8YK",
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

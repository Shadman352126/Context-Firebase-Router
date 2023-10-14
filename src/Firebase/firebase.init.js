// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLn865c8_uNfUcBUoARdc69DlP2YOsu8",
  authDomain: "context-firebase-router-a6bf4.firebaseapp.com",
  projectId: "context-firebase-router-a6bf4",
  storageBucket: "context-firebase-router-a6bf4.appspot.com",
  messagingSenderId: "104243787760",
  appId: "1:104243787760:web:7f4bdd26cee6a92cce0f35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

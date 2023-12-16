// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOU5w82ohhuaqvuK5NLNJ31d2K-Is-GCc",
  authDomain: "netflixgpt-1c855.firebaseapp.com",
  projectId: "netflixgpt-1c855",
  storageBucket: "netflixgpt-1c855.appspot.com",
  messagingSenderId: "923006249902",
  appId: "1:923006249902:web:86935a31f6f0f17992f63f",
  measurementId: "G-STRDTKCPSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
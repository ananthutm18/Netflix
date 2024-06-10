// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTewCOZfOr0GQ4Oe03bj2uFO8DtYT-eiM",
  authDomain: "netflix-project-51563.firebaseapp.com",
  projectId: "netflix-project-51563",
  storageBucket: "netflix-project-51563.appspot.com",
  messagingSenderId: "15588123425",
  appId: "1:15588123425:web:008962348d68808f06d460",
  measurementId: "G-D8CX393ETL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(); 
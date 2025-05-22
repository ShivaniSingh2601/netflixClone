// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAePuIbcl4FZ1dThSliXg_iT3Y7SDUFKcI",
  authDomain: "netflixgpt-138d8.firebaseapp.com",
  projectId: "netflixgpt-138d8",
  storageBucket: "netflixgpt-138d8.firebasestorage.app",
  messagingSenderId: "52987730696",
  appId: "1:52987730696:web:ce3592fd4bb176d025eabd",
  measurementId: "G-6PC33XSYR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnGzInd3zWaqZU3PIt7HwBM_nFmRH0yhM",
  authDomain: "reactproject-a9753.firebaseapp.com",
  projectId: "reactproject-a9753",
  storageBucket: "reactproject-a9753.firebasestorage.app",
  messagingSenderId: "533240374292",
  appId: "1:533240374292:web:89bf02808dcb6a13e4f301",
  measurementId: "G-WZKTLWCL5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)

export{auth}
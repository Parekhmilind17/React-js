// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYsGPf4291Ya38mGVlwPGVzYoTzabAk4c",
  authDomain: "fir-1-2df64.firebaseapp.com",
  projectId: "fir-1-2df64",
  storageBucket: "fir-1-2df64.firebasestorage.app",
  messagingSenderId: "349790931410",
  appId: "1:349790931410:web:9a007f01429f4d52f2600b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export {auth,db,provider}
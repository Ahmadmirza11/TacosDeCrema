// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtdLoQ3Faj0vfx7_wXLTC5uIyIkPEv3SA",
  authDomain: "user1-f9a17.firebaseapp.com",
  projectId: "user1-f9a17",
  storageBucket: "user1-f9a17.firebasestorage.app",
  messagingSenderId: "137385195303",
  appId: "1:137385195303:web:6ad384a361cc9cc21e1b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db}

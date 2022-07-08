// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9Hgtt5E76SW9g4qAR2xcDquQVB77tOu8",
    authDomain: "todoapp-cdfe1.firebaseapp.com",
    projectId: "todoapp-cdfe1",
    storageBucket: "todoapp-cdfe1.appspot.com",
    messagingSenderId: "991355025591",
    appId: "1:991355025591:web:5b36f53f9d40a3313bb532"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
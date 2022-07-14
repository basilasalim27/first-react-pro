import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyA9Hgtt5E76SW9g4qAR2xcDquQVB77tOu8",
    authDomain: "todoapp-cdfe1.firebaseapp.com",
    projectId: "todoapp-cdfe1",
    storageBucket: "todoapp-cdfe1.appspot.com",
    messagingSenderId: "991355025591",
    appId: "1:991355025591:web:5b36f53f9d40a3313bb532"
}

const firebaseApp = initializeApp(config)
const auth = getAuth(firebaseApp);
export default auth;

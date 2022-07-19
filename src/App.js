import React, { useEffect } from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from './component/Auth'
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";

function Apps() {

  useEffect(() => {
    async function setPersistant() {
      try {
        await setPersistence(auth, browserLocalPersistence)
        console.log("Auth is set")
      } catch (error) {
        console.error(error)
      }
    }
    setPersistant()
  })

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>


  );
}
export default Apps;

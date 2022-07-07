import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Apps() {

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
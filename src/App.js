import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Signin from "./component/Signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Apps() {
  const shoot = () => {
    alert("Great Shot!");
  }
  return (


    <BrowserRouter>

      <Routes>
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>


  );
}
export default Apps;
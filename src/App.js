import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Signin from "./component/Signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Apps() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Apps;
import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Signin from "./component/Signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Apps() {

  return (
    <BrowserRouter>
      <Signin />
      <Routes>
        <Route path="/signin" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Apps;
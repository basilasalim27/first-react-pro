import React from "react";
import './Signin.css';
import { Link } from "react-router-dom"
const Signin = () => {
    return (
        <header>
            <Link to="/signin">Sign in</Link>
        </header>
    );
};

export default Signin;
import React from "react";
import './Signin.css';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom"
const Signin = () => {
    return (
        <form>
            <label>User Id:
                <input type="text" value={"admin"} />
            </label>
            <br></br>
            <label>Password:
                <input type="Password" value={"admin"} />
            </label>
            <br></br>
            <button>
                <Link to="/">Sign in</Link>
            </button>
        </form>
    );
};

export default Signin;

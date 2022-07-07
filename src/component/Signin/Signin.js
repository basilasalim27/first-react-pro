import React, { useState } from 'react';
import './Signin.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    function handleSigninButtonClicked() {
        if (userid == "admin" & password == "admin") {
            navigate("/TodoApp")
        }
        else if (userid == "" || password == "") {
            alert("please fill all fields")
        }
        else alert("invalid user id or password")
    }

    function handleUserid(e) {
        setUserid(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="forms">
            <form>
                <h1> Sign In</h1>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" value={userid} onChange={handleUserid} className="user" required></input>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={password} onChange={handlePassword} className="pass" required></input>
                </div>
                <div className="button-container">
                    <button onClick={handleSigninButtonClicked} className="bttn">submit</button>
                </div>
            </form>
            <div className='signup'>
                <Link to="/Signup"><u>sign-up</u></Link>
            </div>
            <div className='forgot-password'>
                forgot password
            </div>
        </div>
    );
};

export default Signin;

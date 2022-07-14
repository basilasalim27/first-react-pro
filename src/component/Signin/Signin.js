import React, { useState } from 'react';
import './Signin.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from '../Auth';
import { signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function handleSigninButtonClicked(e) {
        e.preventDefault()

        if (userid === "" || password === "") {
            alert("please fill all fields")
        }
        else {
            try {
                const user = await signInWithEmailAndPassword(auth, userid, password)
                console.log(user);
                navigate("/TodoApp")
            }
            catch (error) {
                if (error.code === "auth/user-not-found") {
                    alert("User not found")
                }
                else if (error.code === "auth/wrong-password") {
                    alert("Worng Password")
                }
                console.log(error);
            }
        }
    }

    function handleUserid(e) {
        setUserid(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="forms">
            <form className='signin-form'>
                <h1 className='head'> Sign In</h1>
                <div className="input-container">
                    <label>Email Id </label>
                    <input type="email" value={userid} onChange={handleUserid} className="user" required></input>
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
                <Link to="/Signup">sign-up</Link>
            </div>
            <div className='forgot-password'>
                forgot password
            </div>
        </div>
    );
};

export default Signin;

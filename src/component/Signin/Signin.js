import React, { useState } from 'react';
import './Signin.css';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signin = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    function test() {
        if (userid == "admin" & password == "admin") {
            return alert("User Id : " + userid + " , password : " + password);
        }
        return alert("invalid user id and password")
    }
    function handleUserid(e) {
        setUserid(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    return (
        <form>
            <label>User Id:
                <input type="text" value={userid} onChange={handleUserid} className="user" ></input>
            </label>
            <br></br>
            <label>Password:
                <input type="password" value={password} onChange={handlePassword} className="pass" ></input>
            </label>
            <br></br>
            <button onClick={test}>Sign in </button>

        </form>
    );
};

export default Signin;

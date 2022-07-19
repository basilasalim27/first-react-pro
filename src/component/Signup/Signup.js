import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";

import { auth } from '../Auth';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    const [emailid, setEmailid] = useState("")
    const [pword, setPword] = useState("")
    const [repeat, setRepeat] = useState("")
    const navigate = useNavigate();

    function handleEmailid(e) {
        setEmailid(e.target.value)
    }

    function handlePword(e) {
        setPword(e.target.value)
    }

    function handleRepeat(e) {
        setRepeat(e.target.value)
    }

    function handleCancelButtonClicked() {
        navigate("/")
    }

    async function handleSignupButtonClicked(e) {
        e.preventDefault()
        if (emailid === "" || pword === "" || repeat === "") {
            alert("please fill all fields")
        }
        else if (pword !== repeat) {
            alert("Password does not match")
        }
        else {

            try {
                const user = await createUserWithEmailAndPassword(auth, emailid, pword)
                console.log(user);
            }
            catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    alert("Email already in use")
                }
                else if (error.code === "auth/weak-password") {
                    alert("Weak Password")
                }
                else {
                    alert("Unknown Error")
                }

                console.log(error);
            }


        }
    }

    return (
        <div className="signupcontainer">
            <form className='signup-form'>
                <h1 className='heading'>Sign Up</h1>
                <p className='para'>Please fill in this form to create an account.</p>
                <div className='elements'>
                    <div className='element'>
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" value={emailid} onChange={handleEmailid} className="email" required></input>
                    </div>

                    <div className='element'>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" value={pword} onChange={handlePword} className="psw" required></input>
                    </div>

                    <div className='element'>
                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" value={repeat} onChange={handleRepeat} className="psw-repeat" required></input>
                    </div>

                    <div className="clearfix">
                        <button onClick={handleCancelButtonClicked} className="cancelbtn">Cancel</button>
                        <button onClick={handleSignupButtonClicked} className="signupbtn">Sign Up</button>
                    </div>
                </div >
            </form>
        </div>

    );
};

export default Signup;
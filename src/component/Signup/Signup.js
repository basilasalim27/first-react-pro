import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../config/config";
function Signup() {
    const [emailid, setEmailid] = useState("")
    const [pword, setPword] = useState("")
    const [repeat, setRepeat] = useState("")
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    };

    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

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

    function handleSignupButtonClicked() {
        if (emailid === "" || pword === "" || repeat === "") {
            alert("please fill all fields")
        }
        else if (pword !== repeat) {
            alert("Password does not match")
        }
        else alert("Account Created")
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
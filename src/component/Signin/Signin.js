import React, { useState, useEffect } from 'react';
import './Signin.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from '../Auth';
import { signInWithEmailAndPassword, browserLocalPersistence, setPersistence } from "firebase/auth";

function Signin() {
    const [userid, setUserid] = useState("")  //state variable
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    // useeffect : this fun runs when component created , currently [] (empty array) passed to the function to run the function at the inital time only 
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user !== null) {
                navigate("/TodoApp")
            }
        })
    }, [])
    // }, [userid]) -> the usereffect is run when the user id change 



    async function handleSigninButtonClicked(e) {
        e.preventDefault() //to stop reloading the page // submit button (button) nde defult action enn parayunnath page reload cheyyippikkal aan ath ozhuvakkan vendi aan eth upayogikkunnath

        if (userid === "" || password === "") {
            alert("please fill all fields")
        }
        else {
            try {
                const user = await signInWithEmailAndPassword(auth, userid, password) //for signin with email and password 
                // console.log(user.user.uid);
                console.log(user);
                //await setPersistence(auth, browserLocalPersistence) // browser ndem user ndem edak oru local storage inakum , avide save aayit aan user lot varunnath //so refresh cheyyumbo same page thanne kittum//App.js il use cheyyane same aan venengil remove cheyyam
                navigate("/TodoApp")
            }
            catch (error) {
                if (error.code === "auth/user-not-found") { //"auth/user-not-found" - error name
                    alert("User not found")
                }
                else if (error.code === "auth/wrong-password") { //"auth/wrong-password" - error name
                    alert("Worng Password")
                }
                console.log(error);
            }
        }
    }

    function handleUserid(e) {
        setUserid(e.target.value) //here userid changes
    }

    function handlePassword(e) { //here password changes
        setPassword(e.target.value)
    }

    return (
        <div className="forms">
            <form className='signin-form'>
                <h1 className='head'> Sign In</h1>
                <div className="input-container">
                    <label>Email Id </label>
                    <input type="email" value={userid} onChange={handleUserid} className="user" required></input> {/* value evide set cheydh kodukkunnath aan*/}
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
                <Link to="/Signup">sign-up</Link> {/*sign-up il click cheyyumbo /signup lot pokum(signup page lot) */}
            </div>
            <div className='forgot-password'>
                forgot password
            </div>
        </div>
    );
};

export default Signin;

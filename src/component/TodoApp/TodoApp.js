import './TodoApp.css';
import { useState, useEffect } from 'react'
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../Auth';
import { doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";

function App() {
    //const todoItems = []
    const [todoItems, setTodoItems] = useState([])   //state set cheydhekkunnath
    const [taskDescription, setTaskDescription] = useState("") // ee state set cheydhirikkunnath description type cheyyumbol use cheyyan
    const auth = getAuth(); //for get authentication
    const user = auth.currentUser; //for current user
    const navigate = useNavigate(); //for navigation
    //const todoItems = state[0]
    //const setTodoItems = state[1]
    console.log("app started");// app start aakumbol 
    useEffect(() => {   //initial call
        auth.onAuthStateChanged(async (user) => { //async for lamda fun //lamda function nde parameter aan user
            if (user === null) {
                navigate("/")
            }
            else {
                console.log(user);
                console.log(user.uid); // user nde uid kittum
                const querySnapshot = await getDocs(collection(db, user.uid)); //get path of document
                // read data from firestore cloud and then store entaire data in a document
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots

                    console.log(doc.id, " => ", doc.data()); //doc.data - document of entaire data
                    todoItems.push({ //datas ne todoItems.push use cheydh todoItems lot push cheyyanu
                        taskId: doc.id,
                        taskStatus: doc.data().taskStatus, //document nn taskStatus nde value eduth taskStatus nn Aassign cheydh kodukkunnu
                        taskDescription: doc.data().taskDescription //
                    })
                    setTodoItems([...todoItems])   //to avoid memmory issue
                });
            }
        })
    }, [])

    async function handleSubmitButtonClicked() {

        try {
            //const docRef = await addDoc(collection(db, "user"), { to get user as collection name
            const docRef = await addDoc(collection(db, user.uid), { // to get uid as collection name
                taskDescription: taskDescription,
                taskStatus: true
            });
            console.log("Document written with ID: ", docRef.id); // ref id of document
            const todoItem = {
                taskId: docRef.id, //setting taskId as ref id of document
                taskStatus: true,
                taskDescription: taskDescription
            }
            console.log("task id :", todoItem.taskId);
            todoItems.push(todoItem)
            setTodoItems([...todoItems]) //to avoid same memmory issue (...) (vere location il kondpoyi ettitt aa location il ninn aayirikkum evide kond poyi edane)
            setTaskDescription("")
            console.log("after setting taskId to document ref, todoItems: ", todoItems);
            console.log("after setting taskId to document ref, taskDescription: ", taskDescription);
        } catch (e) {   //e-error
            console.error("Error adding document: ", e);
        }
    }

    async function handleCheckedButtonClicked(taskId) {

        try {
            const index = todoItems.findIndex(item => item.taskId == taskId) //find the index of the todoitem with id = given id  //find index page lek send cheyyana lamda de parameter aan item  //
            const checkingRef = doc(db, user.uid, taskId);
            const newStatus = !todoItems[index].taskStatus //togling (not)
            await updateDoc(checkingRef, { //to update document //await - database call
                // taskStatus: !todoItems[index].taskStatus //  true = !true
                taskStatus: newStatus
            });
            todoItems[index].taskStatus = newStatus //togling(not)
            //const index = todoItems.findIndex(item => item.taskId == taskId)
            setTodoItems([...todoItems])
        } catch (error) {
            console.log(error);
        }
    }

    function handleDescriptionChanged(e) {
        setTaskDescription(e.target.value) //place holder il type cheyyumbo value change cheyyan
        //console.log("enter", e.target.value);
    }

    async function handleCloseButton(taskId) { //await use cheyyumbo async function use cheyyanam
        try {
            await deleteDoc(doc(db, user.uid, taskId)); //Delete documents (path:- /user.uid/docref.id(taskId))
            const newTodoItems = todoItems.filter(item => taskId !== item.taskId) //delete button click cheyyumbo firebase cloud il ninnum data pokan
            setTodoItems([...newTodoItems])

        } catch (error) {
            console.log(error);
        }
    }

    async function handlelogoutButtonClicked() {
        try {
            await auth.signOut(); //for signed out
            console.log("signed out");
        } catch (error) {
            // an error
            console.log(error);
        }
        //console.log("logout button clicked");
    }

    return (
        <div className="container">
            <div className="todo"> My Todo App </div>
            <div className="logoutbtn">
                <button onClick={handlelogoutButtonClicked} className="logout">
                    <img src="https://img.icons8.com/material-outlined/40/FFFFFF/shutdown--v1.png" />
                </button>
            </div>
            <div className="workspace">
                {todoItems.map(item => {
                    if (item.taskStatus) {
                        return (<div className="list" key={item.taskId}>
                            <button onClick={() => handleCheckedButtonClicked(item.taskId)} className="checked">
                                <img src="https://img.icons8.com/ios/30/1ABC9C/unchecked-circle.png" className="image" /> </button> {item.taskDescription}
                            <button onClick={() => handleCloseButton(item.taskId)} className='deleted'>
                                <img src="https://img.icons8.com/material-rounded/24/1ABC9C/filled-trash.png" />
                            </button>
                        </div>)
                    }
                    return (<div className="list" key={item.taskId}>
                        <button onClick={() => { handleCheckedButtonClicked(item.taskId) }} className="checked">
                            <img src="https://img.icons8.com/fluency/34/000000/ok.png" className="image" /> </button> <div className="task-description" key={item.taskId}> {item.taskDescription} </div>
                        <button onClick={() => handleCloseButton(item.taskId)} className='deleted'>
                            <img src="https://img.icons8.com/material-rounded/24/1ABC9C/filled-trash.png" />
                        </button>
                    </div>)
                })
                }
            </div>
            <div className="bottom-bar">
                <input type="text" value={taskDescription} onChange={handleDescriptionChanged} className="textarea" placeholder="Enter a todo"></input>
                <button onClick={handleSubmitButtonClicked} className="btn">
                    <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya-4.png" />
                </button>
            </div>
        </div>
    );
}

export default App;

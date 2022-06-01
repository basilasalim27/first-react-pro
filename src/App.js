import './App.css';
import { useState } from 'react'

function App() {
  //const todoItems = []
  const [todoItems, setTodoItems] = useState([])
  const [taskDescription, setTaskDescription] = useState("")

  //const todoItems = state[0]
  //const setTodoItems = state[1]
  function handleSubmitButtonClicked() {
    let heighest = 0
    for (const i of todoItems) {
      heighest = i.taskId
    }
    const todoItem = {
      taskId: heighest + 1,
      taskStatus: true,
      taskDescription: taskDescription
    }
    todoItems.push(todoItem)
    setTodoItems([...todoItems])
    setTaskDescription("")
  }

  function handleCheckedButtonClicked(taskId) {
    todoItems[taskId - 1].taskStatus = !todoItems[taskId - 1].taskStatus
    //const index = todoItems.findIndex(item => item.taskId == taskId)
    setTodoItems([...todoItems])
  }

  function handleDescriptionChanged(e) {
    setTaskDescription(e.target.value)
    //console.log("enter", e.target.value);
  }

  function handleCloseButton(taskId) {
    const newTodoItems = todoItems.filter(item => taskId != item.taskId)
    setTodoItems([...newTodoItems])
  }

  return (
    <div className="container">
      <div className="todo">My Todo App</div>
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
        <button onClick={handleSubmitButtonClicked}>
          <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya-4.png" />
        </button>
      </div>
    </div>
  );
}

export default App;
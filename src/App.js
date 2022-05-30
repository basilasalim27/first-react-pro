import './App.css';
function App() {
  const todoItems = [{ taskId: 1, taskStatus: true, taskDescription: "Buy the groceries" }, { taskId: 2, taskStatus: false, taskDescription: "Push to Github" }]
  function handleSubmitButtonClicked() {
    alert("Hello! I am an alert box!");
  }
  function handleCheckedButtonClicked(taskId) {
    alert(taskId)
  }
  return (
    <div className="container">
      <div className="todo">My Todo App</div>
      <div className="workspace">
        {todoItems.map(item => {
          if (item.taskStatus) {
            return (<div className="list" key={item.taskId}>
              <button onClick={() => handleCheckedButtonClicked(item.taskId)} class="checked">
                <img src="https://img.icons8.com/ios/30/1ABC9C/unchecked-circle.png" className="image" /> </button> {item.taskDescription}
            </div>)
          }
          return (<div className="list" key={item.taskId}>
            <button onClick={() => handleCheckedButtonClicked(item.taskId)} class="checked">
              <img src="https://img.icons8.com/fluency/34/000000/ok.png" className="image" /> </button> <div className="task-description" key={item.taskId}> {item.taskDescription} </div>
          </div>)
        })
        }
      </div>
      <div className="bottom-bar">
        <input type="text" className="textarea" placeholder="Enter a todo"></input>
        <button onClick={handleSubmitButtonClicked}>
          <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya-4.png" />
        </button>
      </div>
    </div>
  );
}

export default App;
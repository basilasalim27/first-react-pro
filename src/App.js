import './App.css';

function App() {
  return (
    <div class="todo1">
      <div class="todo2">
        <h4 ><b>My Todo App</b></h4>
        <input type="text" id="myInput" placeholder="Enter a todo"></input>
        <span onclick="newElement()" class="addBtn" id="btn">✔</span>
      </div>
    </div>
  );
}

export default App;
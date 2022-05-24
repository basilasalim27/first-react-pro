import './App.css';

function App() {
  return (
    <div class="container">
      <div class="todo">My Todo App</div>
      <div class="workspace">
        <div class="list">
          <img src="https://img.icons8.com/ios/30/1ABC9C/unchecked-circle.png" class="image" /> Buy the groceries
        </div>
        <div class="list">
          <img src="https://img.icons8.com/ios/30/1ABC9C/unchecked-circle.png" class="image" /> Get the items
        </div>
        <div class="list">
          <img src="https://img.icons8.com/ios/30/1ABC9C/unchecked-circle.png" class="image" /> Push to Github
        </div>
      </div>
      <div class="bottom-bar">
        <input type="text" class="textarea" placeholder="Enter a todo"></input>
        <button>
          <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya-4.png" />
        </button>
      </div>
    </div>
  );
}

export default App;
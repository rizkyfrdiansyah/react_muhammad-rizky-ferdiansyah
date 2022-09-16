import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Todo App",
      todos: ["Membuat Komponen", "Unit Testing", "Setup Development Environment", "Deploy ke server"],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <hr />
        <input type="text" />
        <button>Save</button>
        {this.state.todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </div>
    );
  }
}

export default App;

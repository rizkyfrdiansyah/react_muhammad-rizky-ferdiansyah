import React, { useState } from "react";
import TodoItem from "./TodoItem";

const AddTodo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Input todo title");
    } else {
      let todosResult = todos;
      let id = todos[todos.length - 1].id + 1;
      let completed = false;

      let result = {
        id,
        title,
        completed,
      };
      todosResult.push(result);
      console.log(todosResult);
      setTodos(todosResult);
    }
  };

  return (
    <>
      <div className="todo-add">
        <div className="todo-add-input">
          <form>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add Todo.."
            />
          </form>
        </div>
        <div className="todo-add-button">
          <button onClick={submitHandler} className="todo-btn">
            Submit
          </button>
        </div>
      </div>
      <div className="container-item main-section">
        {todos.length !== 0 ? (
          todos.map((todo) => {
            return <TodoItem todo={todo} />;
          })
        ) : (
          <p>Now Loading...</p>
        )}
      </div>
    </>
  );
};

export default AddTodo;
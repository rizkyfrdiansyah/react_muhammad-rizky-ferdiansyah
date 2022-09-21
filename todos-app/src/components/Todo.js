import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar react hooks",
      completed: true,
    },
    {
      id: 2,
      title: "Latihan react hooks",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let todosTemp = [...todos];
    // immutable dan mutable
    const lastIndex = todosTemp.length - 1;

    let id = todosTemp[lastIndex].id + 1;
    let completed = false;

    let result = {
      id,
      title,
      completed,
    };
    todosTemp.push(result);

    setTodos(todosTemp);
    console.log(todosTemp);
  };

  const deleteHandler = (id) => {
    let todosTemp = [...todos];

    todosTemp = todosTemp.filter((todo) => todo.id !== id);
    setTodos(todosTemp);
    console.log(`Delete id ${id}`);
  };

  useEffect(() => {
    console.log("use effect jalan");
  }, []);

  const setLocalStorage = () => {
    localStorage.setItem("ashiapp", "mantaph");
  };
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="container-item">
        <div className="todo-input">
          <form>
            <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Input your todo list, thanks." />
            <button onClick={submitHandler}>Submit Todo</button>
            {/* <p>{title}</p> */}
          </form>
        </div>
        <div className="table-section">
          <table border="1" cellSpacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => {
                const { id, title, completed } = todo;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{completed ? "done" : "in progress"}</td>
                    <td>
                      <button onClick={() => deleteHandler(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={setLocalStorage}>set local storage</button>
          <button onClick={clearLocalStorage}>clear local storage</button>
        </div>
      </div>
    </>
  );
};

export default Todo;

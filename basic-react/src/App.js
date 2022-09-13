import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

// Components
import Profile from "./components/Profile";

function App() {
  const profiles = [
    {
      id: 1,
      name: "Vincent",
      hobby: "coding",
    },
    {
      id: 2,
      name: "Admin",
      hobby: "editing",
    },
    {
      id: 3,
      name: "Ncent",
      hobby: "makan",
    },
    {
      id: 4,
      name: "James",
      hobby: "minum",
    },
    {
      id: 5,
      name: "Jack",
      hobby: "maen valorant",
    },
  ];

  return (
    <div className="container">
      <h1>Belajar React</h1>
      <p>lorem ipsum is a dummy text</p>
      <hr />

      {profiles.map((profile) => {
        const { id, name, hobby } = profile;
        return <Profile key={id} name={name} hobby={hobby}></Profile>;
      })}
    </div>
  );
}

export default App;

/**
 * React ada 2 jenis  component :
 * 1. Class based Component
 * 2. Function based Component
 */

// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Todo from "./component/todo";
function App() {
  return (
    <div
      className="App"
      style={{
        width: "50%",
        margin: "auto",
        paddingBottom: "10px",
        backgroundColor: "#eba834",
        marginTop: "100px",
        borderRadius: "3px",
      }}
    >
      <h1 style={{ width: "100%", color: "black" ,marginTop:"50px" }}> Todo App</h1>
      <Todo />
    </div>
  );
}

export default App;

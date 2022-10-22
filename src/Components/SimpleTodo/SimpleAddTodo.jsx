import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SimpleTodoList from "./SimpleTodoList";

const SimpleAddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTodo = () => {
    let payload = {
      title: value,
      description: desc,
      id: Date.now(),
      status: false,
    };
    axios
      .post("http://localhost:8080/todos", payload)
      .then((res) => {
        getTodos();
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo"
      />
      <input
        type="text"
        placeholder="Add Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD TODO</button>
      <SimpleTodoList todos={todos} getTodos={getTodos} value={value} desc={desc}></SimpleTodoList>
    </div>
  );
};

export default SimpleAddTodo;

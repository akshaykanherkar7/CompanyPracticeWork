import React, { useContext, useState } from "react";
import { AddTodoContext } from "../../Contexts/AddTodoContext";
import TodoList from "./TodoList";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const { todos, setTodos } = useContext(AddTodoContext);

  const handleAddTodo = () => {
    let payload = {
      title: value,
      id: Date.now(),
      status: false,
    };
    setTodos([...todos, payload]);
    setValue("");
  };
  return (
    <div>
        <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <TodoList value={value}></TodoList>
    </div>
  );
};

export default AddTodo;

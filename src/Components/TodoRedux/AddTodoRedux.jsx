import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Todo/todo.actions";
import TodoListRedux from "./TodoListRedux";

const AddTodoRedux = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    let payload = {
      title: value,
      status: false,
    };
    dispatch(addTodo(payload));
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
      <TodoListRedux value={value}></TodoListRedux>
    </div>
  );
};

export default AddTodoRedux;

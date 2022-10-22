import React from "react";
import axios from "axios";

const SimpleTodoList = ({ todos, getTodos, value, desc }) => {
  const handleToggle = (el) => {
    axios
      .patch(`http://localhost:8080/todos/${el.id}`, { status: !el.status })
      .then((res) => {
        getTodos();
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        getTodos();
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const handleEdit = (el) => {
    el.title = value;
    el.description = desc;
    axios
      .put(`http://localhost:8080/todos/${el.id}`, el)
      .then((res) => {
        getTodos();
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  return (
    <div>
      {todos.length > 0 &&
        todos.map((el) => (
          <div key={el.id}>
            <div>{el.title}</div>
            <div>{el.description}</div>
            <div>{el.status ? "Completed" : "NotCompleted"}</div>
            <div>
              <button onClick={() => handleToggle(el)}>Toggle</button>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
              <button onClick={() => handleEdit(el)}>Edit</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SimpleTodoList;

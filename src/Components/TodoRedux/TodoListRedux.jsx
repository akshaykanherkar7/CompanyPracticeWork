import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  editTodo,
  getTodos,
  toggleTodo,
} from "../../Redux/Todo/todo.actions";

const TodoListRedux = ({ value }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleToggleTodo = (item) => {
    dispatch(toggleTodo(item));
  };

  const handleEditTodo = (item, value) => {
    dispatch(editTodo(item, value));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      {todos.length > 0 &&
        todos.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.status ? "Completed" : "NotCompleted"}</div>
            <div>
              <button onClick={() => handleToggleTodo(item)}>Toggle</button>
              <button onClick={() => handleEditTodo(item, value)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoListRedux;

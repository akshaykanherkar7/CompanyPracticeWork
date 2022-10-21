import React, { useContext } from "react";
import { AddTodoContext } from "../../Contexts/AddTodoContext";
import { DeleteTodoContext } from "../../Contexts/DeleteTodoContext";
import { EditTodoContext } from "../../Contexts/EditTodoContext";
import { ToggleTodoContext } from "../../Contexts/ToggleTodoContext";

const TodoList = ({ value }) => {
  const { todos } = useContext(AddTodoContext);
  const { handleTuggleTodo } = useContext(ToggleTodoContext);
  const { handleDeleteTodo } = useContext(DeleteTodoContext);
  const { handleEditTodo } = useContext(EditTodoContext);
  return (
    <div style={{ marginTop: "10px" }}>
      {todos.length > 0 &&
        todos.map((el) => (
          <div
            key={el.id}
            style={{
              border: "1px solid gray",
              width: "20%",
              margin: "auto",
              marginBottom: "5px",
            }}
          >
            <div>{el.title}</div>
            <div>{el.status ? "True" : "False"}</div>
            <div>
              <button onClick={() => handleTuggleTodo(el)}>Toggle</button>
              <button onClick={() => handleDeleteTodo(el.id)}>Remove</button>
              <button onClick={() => handleEditTodo(el, value)}>Edit</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;

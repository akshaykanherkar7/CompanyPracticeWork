import { createContext, useContext } from "react";
import { AddTodoContext } from "./AddTodoContext";

export const DeleteTodoContext = createContext();

export const DeleteTodoContextProvider = ({ children }) => {
  const { todos, setTodos } = useContext(AddTodoContext);
  const handleDeleteTodo = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <DeleteTodoContext.Provider value={{ handleDeleteTodo }}>
      {children}
    </DeleteTodoContext.Provider>
  );
};

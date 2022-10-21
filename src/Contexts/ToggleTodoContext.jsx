import { createContext, useContext } from "react";
import { AddTodoContext } from "./AddTodoContext";

export const ToggleTodoContext = createContext();

export const ToggleTodoContextProvider = ({ children }) => {
  const { todos, setTodos } = useContext(AddTodoContext);
  const handleTuggleTodo = (el) => {
    let newTodos = todos.map((item) => {
      if (item.id === el.id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  };
  return (
    <ToggleTodoContext.Provider value={{ handleTuggleTodo }}>
      {children}
    </ToggleTodoContext.Provider>
  );
};

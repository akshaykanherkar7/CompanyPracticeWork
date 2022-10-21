import { createContext, useContext } from "react";
import { AddTodoContext } from "./AddTodoContext";

export const EditTodoContext = createContext();

export const EditTodoContextProvider = ({ children }) => {
  const { todos, setTodos } = useContext(AddTodoContext);
  const handleEditTodo = (el, updateValue) => {
    let updatedTodo = todos.map((item) => {
      if (item.id === el.id) {
        item.title = updateValue;
      }
      return item;
    });
    setTodos(updatedTodo);
  };
  return (
    <EditTodoContext.Provider value={{ handleEditTodo }}>
      {children}
    </EditTodoContext.Provider>
  );
};

import { createContext, useState } from "react";

export const AddTodoContext = createContext();

export const AddTodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <AddTodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </AddTodoContext.Provider>
  );
};

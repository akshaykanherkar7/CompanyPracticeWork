import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { store } from "./Redux/Srore";
// import { AddTodoContextProvider } from "./Contexts/AddTodoContext";
// import { ToggleTodoContextProvider } from "./Contexts/ToggleTodoContext";
// import { DeleteTodoContextProvider } from "./Contexts/DeleteTodoContext";
// import { EditTodoContextProvider } from "./Contexts/EditTodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AddTodoContextProvider>
  //   <ToggleTodoContextProvider>
  //     <DeleteTodoContextProvider>
  //       <EditTodoContextProvider>
  //         <App />
  //       </EditTodoContextProvider>
  //     </DeleteTodoContextProvider>
  //   </ToggleTodoContextProvider>
  // </AddTodoContextProvider>
  // <Provider store={store}>
  <App />
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

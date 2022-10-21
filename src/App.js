import "./App.css";
import AddTodoRedux from "./Components/TodoRedux/AddTodoRedux";
// import Counter from "./Components/Counter";
// import { CounterClass } from "./Components/CounterClassComponents";
// import TicTac from "./Components/TicTac";
// import AddTodo from "./Components/TodoContext/AddTodo";
// import TogglingBTNs from "./Components/TogglingBTNs";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <TicTac></TicTac> */}
      {/* <CounterClass></CounterClass> */}
      {/* <AddTodo></AddTodo> */}
      {/* <TogglingBTNs></TogglingBTNs> */}
      <AddTodoRedux></AddTodoRedux>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import TodoFooter from "./components/TodoFooter";
import TodoFormInput from "./components/TodoFormInput";
import TodoHeader from "./components/TodoHeader";
import TodoListContainer from "./components/TodoListContainer";
// import HomePage from "./components/HomePage";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Todo 3",
      isCompleted: false,
    },
  ]);

  const onAddTodo = (newTodo) => {
    const newTodps = [...todos, newTodo];
    setTodos(newTodps);
  };

  return (
    <div>
      <TodoHeader />
      <TodoFormInput onAddTodo={onAddTodo} />
      <TodoListContainer todos={todos} />
      <TodoFooter />
    </div>
  );
}

export default App;

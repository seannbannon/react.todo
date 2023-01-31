import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(e){

  }

  return (
    // wrapped in empty element because you cant return more than one thing-- and here we aree returning 2 things
    <>
    <TodoList todos = {todos} />
    <input type = "text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
};

export default App;

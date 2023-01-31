import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    // wrapped in empty element because you cant return more than one thing-- and here we aree returning 2 things
    <>
    <TodoList />
    <input type = "text" />
    </>
  )
};

export default App;

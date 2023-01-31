import React, { useState, useRef } from "react";
//useRef to reference the html -- in this case the input
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e){
    const name = todoNameRef.current.value 
    //aka if nothing is in the box then dont add it to the todo list
    if (name === "") return
    //test
    console.log(name)
    //clears the box after you click the button
    todoNameRef.current.value = null
  }

  return (
    // wrapped in empty element because you cant return more than one thing-- and here we aree returning 2 things
    <>
    <TodoList todos = {todos} />
    <input ref={todoNameRef} type = "text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
};

export default App;

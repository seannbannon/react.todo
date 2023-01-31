import React, { useState, useRef, useEffect } from "react";
//useRef to reference the html -- in this case the input
import TodoList from "./TodoList";
//function that generates a random id
import {v4} from 'uuid';

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  //save todos to local storage to stay even after page refresh
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }
  }, [todos])


  function toggleTodo(id){
    //this is a copy of our current todos list so we dont change our current todo list-- dont directly modify a state variable
    const newTodos = [...todos]
    //basically find in the new list of todos a todo with a matching id that we pass through up top
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }



  function handleAddTodo(e){
    const name = todoNameRef.current.value 
    //aka if nothing is in the box then dont add it to the todo list
    if (name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, { id:v4(), name: name, complete:false}]
    })
    
    //clears the box after you click the button
    todoNameRef.current.value = null
  }

  return (
    // wrapped in empty element because you cant return more than one thing-- and here we aree returning 2 things
    <>
    <TodoList todos = {todos} toggleTodo = {toggleTodo} />
    <input ref={todoNameRef} type = "text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
};

export default App;

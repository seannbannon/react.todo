import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
    return (
        todos.map(todo => {
            //adding key because each child in a  list needs a unique key
            return <Todo key={todo} todo={todo} />
        })
    )
}

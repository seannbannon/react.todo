import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
    return (
        todos.map(todo => {
            //adding key because each child in a  list needs a unique key-- in this case, allows react to only rerender or change the components
            //that actually chnage inside the array instead of rerendering them all each time
            return <Todo key={todo.id} todo={todo} />
        })
    )
}

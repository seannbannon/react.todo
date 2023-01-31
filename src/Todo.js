import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked= {todo.complete} onChange= {handleTodoClick} />
                {todo.name}
            </label>
            
        </div>
    )
}

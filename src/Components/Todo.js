import React, { useState } from 'react'

export const Todo = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        const newlist = [todo, ...todos]
        setTodos(newlist)
        setTodo("");
    }

    return (
        <div className="flex">
            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
           <button onClick={handleSubmit}> add Todo</button>

           <ul>
               {todos.map(todo => {
                   return <li> {todo} </li>
               })}
           </ul>
        </div>
    )
}

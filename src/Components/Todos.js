import React, { useState } from 'react'
import { Todo } from './Todo';
import shortid from 'shortid'


export const Todos = () => {

    const [todo, setTodo] = useState({id: shortid.generate(), title: "", completed:false});
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        setTodos([
            ...todos,
            todo
        ])
        setTodo({id: shortid.generate(), title: "", completed:false});
    }

    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                else{
                    return todo
                }
            })
        )
    }
    return (
        <div className="flex">
            <input name="title" value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} />
           <button onClick={handleSubmit}> add Todo</button>
        
               {todos.map((todo) => {
                   return <Todo title={todo.title} onClick={() => handleToggle(todo.id)} completed={todo.completed}/>
               })}

        </div>
    )
}

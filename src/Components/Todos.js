import React, { useState } from 'react'
import { Dropdown } from './Dropdown';
import { Todo } from './Todo';
// import shortid from 'shortid'
import { TodoForm } from './TodoForm';


export const Todos = () => {

    let currentTodos = []
    const [todos, setTodos] = useState([]);
    const show = ["all", "completed", "incomplete"]
    const [showTodo, setShowTodo] = useState("all");  
    
    if(showTodo==="all"){
        currentTodos = todos
    }
    else if(showTodo==="completed"){
        currentTodos = todos.filter(todo => todo.completed === true)
    }
    else {
        currentTodos = todos.filter(todo => todo.completed === false)
    }

    const addTodo = (todo) => {
        console.log(todo)
        console.log(todos)
        setTodos([todo, ...todos])
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
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => (todo.id !== id)));
    }
    
    const handleChange = (value) => {
        setShowTodo(value)
    }
    return (
        <div >
            <Dropdown value={showTodo} values={show} onChange={handleChange}/>
            <TodoForm onSubmit={addTodo} />
            {currentTodos.map((todo) => {
                return <Todo onDelete={() => handleDeleteTodo(todo.id)} key={todo.id} title={todo.text} onClick={() => handleToggle(todo.id)} completed={todo.completed}/>
            })}
        </div>
    )
}

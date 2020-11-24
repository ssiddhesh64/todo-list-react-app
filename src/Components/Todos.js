import React, { useState } from 'react'
import { Todo } from './Todo';
// import shortid from 'shortid'
import { TodoForm } from './TodoForm';


export const Todos = () => {

    const [todos, setTodos] = useState([]);    
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
    
    return (
        <div >
            <TodoForm onSubmit={addTodo} />
            {todos.map((todo) => {
                return <Todo onDelete={() => handleDeleteTodo(todo.id)} key={todo.id} title={todo.text} onClick={() => handleToggle(todo.id)} completed={todo.completed}/>
            })}

        </div>
    )
}

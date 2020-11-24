import React, { useState } from 'react'
import shortid from 'shortid';

export const TodoForm = ({onSubmit}) => {

    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({id: shortid.generate(), text: todo, completed:false});
        setTodo("");
    }

    const handleChange = (e) => {
        // console.log(e)
        setTodo(
            e.target.value
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="text" value={todo} onChange={handleChange} />
            <button> add Todo</button>
        </form>
    )
}

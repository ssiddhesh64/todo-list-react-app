import React from 'react'

export const Todo = ({title, onClick, completed, onDelete}) => {

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{
                textDecoration: completed ? "line-through" : null
            }}
            onClick={onClick}>
                {title}
            </div>
            <button onClick={onDelete}> x </button>
        </div>
    )
}

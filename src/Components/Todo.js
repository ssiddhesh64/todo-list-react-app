import React from 'react'

export const Todo = ({title, onClick, completed}) => {

    return (
        <div style={{
            textDecoration: completed ? "line-through" : null
        }}
        onClick={onClick}>
            {title}
        </div>
    )
}

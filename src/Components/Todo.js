import React from 'react'

export const Todo = ({title, onClick, completed}) => {

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{
                textDecoration: completed ? "line-through" : null
            }}
            onClick={onClick}>
                {title}
            </div>
            <button style={{marginLeft: 4}}> x </button>
        </div>
    )
}

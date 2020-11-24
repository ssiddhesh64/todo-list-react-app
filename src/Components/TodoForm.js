import React from 'react'

export const TodoForm = ({name, value, onChange}) => {
    return (
        <form >
            <input name={name} value={value} onChange={onChange} />
        </form>
    )
}

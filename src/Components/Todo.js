import React from "react";
import "./todoStyle.css";
import "./styles.css";

export const Todo = ({ title, onClick, completed, onDelete }) => {
  return (
    <div className="todoList">
      <input
        type="checkbox"
        className="todoCheckBox"
        checked={completed}
        onChange={onClick}
      ></input>
      <div
        className="todoTitle"
        style={{
          textDecoration: completed ? "line-through" : null,
        }}
        onClick={onClick}
      >
        {title}
      </div>
      <div className="todoCloseButton">
        <button onClick={onDelete}> x </button>
      </div>
    </div>
  );
};

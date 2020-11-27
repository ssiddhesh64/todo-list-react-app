import React from "react";
import "./todoStyle.css";

export const Todo = ({ title, onClick, completed, onDelete }) => {
  return (
    <div className="todo">
      <div
        style={{
          textDecoration: completed ? "line-through" : null,
        }}
        onClick={onClick}
      >
        {title}
      </div>
      <button onClick={onDelete}> x </button>
    </div>
  );
};

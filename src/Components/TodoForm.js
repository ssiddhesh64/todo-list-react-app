import React, { useState, useRef } from "react";
import shortid from "shortid";
import { Toast } from "./Toast";
import "./styles.css";

export const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  const inputval = useRef(null);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length === 0) {
      inputval.current.focus();
      // setTimeout(() => setShow(false), 1000);
      setShow(true);
      return;
    }
    onSubmit({ id: shortid.generate(), text: todo, completed: false });
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="text"
        className="searchbox"
        ref={inputval}
        value={todo}
        onChange={handleChange}
        placeholder="add todo..."
      />
      <button className="addTodo"> add Todo</button>
      <Toast
        show={show}
        title="Todo cannot be empty"
        description="please add todo"
      />
    </form>
  );
};

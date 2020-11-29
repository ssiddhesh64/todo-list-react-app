import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import "./stylegrid.css";

export const Todos = () => {
  let currentTodos = [];
  const [todos, setTodos] = useState([]);
  const show = ["all", "completed", "incomplete"];
  const [showTodo, setShowTodo] = useState("all");

  if (showTodo === "all") {
    currentTodos = todos;
  } else if (showTodo === "completed") {
    currentTodos = todos.filter((todo) => todo.completed === true);
  } else {
    currentTodos = todos.filter((todo) => todo.completed === false);
  }

  const addTodo = (todo) => {
    console.log(todo);
    console.log(todos);
    setTodos([todo, ...todos]);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (value) => {
    setShowTodo(value);
  };

  const handleRemoveComplete = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };
  return (
    <div className="container">
      <div className="dropdown">
        <Dropdown value={showTodo} values={show} onChange={handleChange} />
      </div>
      <div className="todoform">
        <TodoForm onSubmit={addTodo} />
      </div>
      <div className="todolist">
        {currentTodos.map((currentTodo) => {
          return (
            <Todo
              onDelete={() => handleDeleteTodo(currentTodo.id)}
              key={currentTodo.id}
              title={currentTodo.text}
              onClick={() => handleToggle(currentTodo.id)}
              completed={currentTodo.completed}
            />
          );
        })}
      </div>

      <div className="todo-footer">
        {currentTodos.some((todo) => todo.completed) ? (
          <button onClick={handleRemoveComplete}>remove complete</button>
        ) : null}
      </div>
    </div>
  );
};

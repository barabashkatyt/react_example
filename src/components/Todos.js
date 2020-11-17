import React from "react";

export const Todos = ({ todos, onRemove }) => (
  <ul className="list-group">
    {todos.map((todo) => (
      <li className="list-group-item todo" key={todo.id}>
        <div>
          <strong>{todo.title}</strong>
          <small>{todo.date}</small>
        </div>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          onClick={() => onRemove(todo.id)}
        >
          &times;
        </button>
      </li>
    ))}
  </ul>
);

import React from "react";

export const Todos = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {todo.title}
          <button type="button" class="btn btn-outline-danger btn-sm">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

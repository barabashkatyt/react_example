import React, { useContext } from "react";
import { AlertContext } from "./../context/alert/alertContext";

export const Todos = ({ todos, onRemove }) => {
  const alert = useContext(AlertContext);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item todo" key={todo.id}>
          <div>
            <strong>{todo.title}</strong>
            <small>{todo.date}</small>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              onRemove(todo.id).then(() => {
                alert.show("Todo was deleted", "warning");
              });
            }}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

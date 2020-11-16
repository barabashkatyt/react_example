import React, { useContext } from "react";
import propTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="list-group-item todo">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        &nbsp;
        <strong>{todo.title}</strong>
        <small>{new Date().toLocaleDateString()}</small>
      </span>
      <button
        type="button"
        class="btn btn-outline-danger btn-sm"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number,
  onChange: propTypes.func.isRequired,
};
export default TodoItem;

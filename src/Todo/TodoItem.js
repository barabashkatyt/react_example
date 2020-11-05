import React, { useContext } from "react";
import propTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  console.log("todo", todo);
  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        <strong>{index + 1}</strong> &nbsp; {todo.text}
      </span>
      <button
        className="btn-delete"
        // onClick={() => {
        //   removeTodo(todo.id);
        // }}
        onClick={removeTodo.bind(null, todo.id)}
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

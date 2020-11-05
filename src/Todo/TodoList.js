import React from "react";
import propTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <div>
            <TodoItem
              todo={todo}
              key={todo.id}
              index={index}
              onChange={props.onToggle}
            />
          </div>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: propTypes.array,
  onToggle: propTypes.func.isRequired,
};

export default TodoList;

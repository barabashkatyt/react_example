import React, { Fragment, useState, useEffect } from "react";
import { Form } from "./../components/Form";
import TodoList from "./../Todo/TodoList";
import Loader from "./../Todo/Loader";
import Context from "./../context";

const AddTodo = React.lazy(() => import("./../Todo/AddTodo"));

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=7")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          // setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <Fragment>
        <Form />
        <hr />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos</p>
        )}
      </Fragment>
    </Context.Provider>
  );
}

export default Home;

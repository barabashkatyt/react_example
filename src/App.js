import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
// import TodoList from "./Todo/TodoList";
// import Context from "./context";
// // import AddTodo from "./Todo/AddTodo";
// import Loader from "./Todo/Loader";
// import Modal from "./Modal/Modal";

// const AddTodo = React.lazy(() => import("./Todo/AddTodo"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} exact component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// const [todos, setTodos] = React.useState([]);
// const [loading, setLoading] = React.useState(true);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos?_limit=7")
//     .then((response) => response.json())
//     .then((todos) => {
//       setTimeout(() => {
//         setTodos(todos);
//         setLoading(false);
//       }, 2000);
//     });
// }, []);

// function toggleTodo(id) {
//   setTodos(
//     todos.map((todo) => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     })
//   );
// }

// function removeTodo(id) {
//   setTodos(todos.filter((todo) => todo.id !== id));
// }

// function addTodo(title) {
//   setTodos(
//     todos.concat([
//       {
//         id: Date.now(),
//         completed: false,
//         title,
//       },
//     ])
//   );
// }

// {
//   /* <Context.Provider value={{ removeTodo }}>
//         <div className="App">
//           <div className="wrapper">
//             <h1>Todos</h1>
//             <Modal />
//             <React.Suspense fallback={<p>loading...</p>}>
//               <AddTodo onCreate={addTodo} />
//             </React.Suspense>

//             {loading && <Loader />}
//             {todos.length ? (
//               <TodoList todos={todos} onToggle={toggleTodo} />
//             ) : loading ? null : (
//               <p>No todos</p>
//             )}
//           </div>
//         </div>
//       </Context.Provider> */
// }

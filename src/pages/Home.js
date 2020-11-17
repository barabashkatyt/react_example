import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "./../components/Form";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";
import { Todos } from "../components/Todos";

export const Home = () => {
  const { loading, todos, fetchTodos } = useContext(FirebaseContext);

  // const notes = new Array(3)
  //   .fill("")
  //   .map((_, i) => ({ id: i, title: `Todo ${i + 1}` }));

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Todos todos={todos} />}
    </Fragment>
  );
};

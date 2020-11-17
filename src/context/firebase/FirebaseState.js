import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { REMOVE_TODO, SHOW_LOADER, ADD_TODO, FETCH_TODOS } from "../types";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchTodos = async () => {
    showLoader();
    const res = await axios.get(`${url}/todos.json`);

    const payload = Object.keys(res.data || []).map((key) => {
      return { ...res.data[key], id: key };
    });

    console.log(res.data);

    dispatch({
      type: FETCH_TODOS,
      payload,
    });
  };

  const addTodo = async (title) => {
    const todo = {
      title,
      date: new Date().toJSON(),
    };

    try {
      const res = await axios.post(`${url}/todos.json`, todo);
      const payload = {
        ...todo,
        id: res.data.name,
      };

      dispatch({ type: ADD_TODO, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const removeTodo = async (id) => {
    await axios.delete(`${url}/todos/${id}.json`);
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addTodo,
        removeTodo,
        fetchTodos,
        loading: state.loading,
        todos: state.todos,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

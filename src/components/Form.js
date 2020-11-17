import React, { useState, useContext } from "react";
import { AlertContext } from "./../context/alert/alertContext";
import { FirebaseContext } from "./../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addTodo(value.trim())
        .then(() => {
          alert.show("Todo was made", "success");
        })
        .catch(() => {
          alert.show("Something went wrong", "danger");
        });
      setValue("");
    } else {
      alert.show("Write some todos");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

import "./../src/index";
import { FirebaseContext } from "./../src/context/firebase/firebaseContext";

function fetchTodos() {
  console.log("fetch");
}
function removeTodos() {
  console.log("remove");
}

export const decorators = [
  (Story) => (
    <FirebaseContext.Provider
      value={{ loading: false, todos: [], fetchTodos, removeTodos }}
    >
      <Story />
    </FirebaseContext.Provider>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

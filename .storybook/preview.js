import Context from "../src/context";

function removeTodo(id) {
  setTodos(todos.filter((todo) => todo.id !== id));
}
export const decorators = [
  (Story) => (
    <Context.Provider value={{ removeTodo }}>
      <Story />
    </Context.Provider>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

import Context from "../src/context";
import "./../src/index";

function removeTodo(id) {
  console.log("remove todo");
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

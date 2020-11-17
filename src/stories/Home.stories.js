import React from "react";
import { Home } from "../pages/Home";

export default {
  component: Home,
  title: "Todo Application",
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: [
    { date: "020303", title: "text" },
    { date: "0423045", title: "asjdhahs" },
  ],
  loading: false,
  fetchTodos: () => console.log("fetch todos"),
  removeTodo: () => console.log("remove todo"),
};

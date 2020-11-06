import React from "react";
import TodoList from "./../Todo/TodoList";

export default {
  component: TodoList,
  title: "TodoList",
};

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});

Default.args = {
  todos: [
    { id: 1, completed: false, title: "buy milk" },
    { id: 2, completed: true, title: "buy honey" },
    { id: 3, completed: false, title: "buy bun" },
  ],
};

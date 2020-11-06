import React from "react";
import TodoItem from "./../Todo/TodoItem";
import "./../index.css";

export default {
  title: "TodoItem",
  component: TodoItem,
};

const Template = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  todo: { id: 1, completed: false, title: "buy milk" },
  index: 1,
  onChange: false,
};

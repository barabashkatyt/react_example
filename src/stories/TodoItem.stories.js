import React from "react";
import TodoItem from "./../Todo/TodoItem";

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

export const Done = Template.bind({});
Done.args = {
  todo: { id: 1, completed: true, title: "buy milk" },
  index: 1,
  onChange: false,
};

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
const tooLongTitle =
  "Too Long Title Too Long Title TooLong Title Too Long Title Too Long Title Too Long Title Too Long Title Too Long Too Long Title Too Long Title TooLong Title Too Long Title Too Long Title Too Long Title Too Long Title Too Long Too Long Title Too Long Title TooLong Title Too Long Title Too Long Title Too Long Title Too Long Title Too Long ";

export const TooLongTodo = Template.bind({});
TooLongTodo.args = {
  todo: {
    id: 1,
    completed: true,
    title: tooLongTitle,
  },
  index: 1,
  onChange: false,
};

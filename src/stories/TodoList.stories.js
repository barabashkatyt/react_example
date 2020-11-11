import React from "react";
import TodoList from "./../Todo/TodoList";
import Loader from "./../Todo/Loader";

export default {
  component: TodoList,
  title: "TodoList",
};

const Template = (args) => <TodoList {...args} />;
const TemplateEmpty = () => <p>No todos</p>;
const TemplateLoading = () => <Loader />;

export const Default = Template.bind({});
Default.args = {
  todos: [
    { id: 1, completed: false, title: "buy milk" },
    { id: 2, completed: false, title: "buy honey" },
    { id: 3, completed: false, title: "buy bun" },
  ],
};

export const ListWithDoneTodo = Template.bind({});
ListWithDoneTodo.args = {
  todos: [
    { id: 1, completed: true, title: "buy milk" },
    { id: 2, completed: true, title: "buy honey" },
  ],
};

export const Empty = TemplateEmpty.bind({});

export const LoadingList = TemplateLoading.bind({});

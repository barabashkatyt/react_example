import React from "react";
import AddTodo from "./../Todo/AddTodo";

function mf() {
  console.log("onCreate");
}
export default {
  component: AddTodo,
  title: "AddTodo",
};

const Template = (args) => <AddTodo {...args} />;

export const Default = Template.bind({});
Default.args = {
  onCreate: mf,
};

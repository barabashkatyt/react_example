import React from "react";
import { Todos } from "./../../src/components/Todos";

export default {
  title: "Todos",
  component: Todos,
};

const Template = (args) => <Todos {...args} />;

export const Default = Template.bind({});

Default.args = {
  todos: [
    { date: "020303", title: "text" },
    { date: "0423045", title: "asjdhahs" },
  ],
  onRemove: () => console.log("on remove"),
};

const longString =
  "long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string long test string ";

export const LongTodo = Template.bind({});

LongTodo.args = {
  todos: [
    { date: "020303", title: longString },
    { date: "0423045", title: longString },
  ],
  onRemove: () => console.log("on remove"),
};

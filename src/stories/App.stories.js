import React from "react";
import App from "./../App";

export default {
  component: App,
  title: "Todo Application",
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};

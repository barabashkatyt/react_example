import React from "react";
import Modal from "../Modal/Modal";

export default {
  component: Modal,
  title: "Modal",
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
};

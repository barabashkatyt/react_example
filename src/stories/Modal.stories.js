import React from "react";
import Modal from "../Modal/Modal";

export default {
  component: Modal,
  title: "Modal",
};

const Template = (args) => <Modal {...args} />;
const TemplateOpened = () => (
  <React.Fragment>
    <div className="modal">
      <div className="modal-body">
        <h1>Modal title</h1>
        <p>some text</p>
        <button>Close modal</button>
      </div>
    </div>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};

export const OpenedModal = TemplateOpened.bind({});

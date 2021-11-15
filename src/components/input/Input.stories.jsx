import React from "react";
import Input from "./Input";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / Input",
  component: Input,
  decorators: [withKnobs],
};

const typeOptions = {
  Text: "text",
  Password: "password",
  Email: "email",
};

export const Default = () => {
  const isError = boolean("Error", false);
  const isDisabled = boolean("Disabled", false);

  return (
    <Input
      id="1"
      type={select("Type", typeOptions, "text")}
      labelText={text("Label text", "label")}
      placeHolder={text("Placeholder", "Placeholder")}
      isError={isError}
      disabled={isDisabled}
      errorMessage={text("Error Msg", "error")}
    />
  );
};

//Code for newer storybook version where "Controls" replace "Knobs":

//const Template = (args) => <Input {...args} />;

// export const Placeholder = () => {
//   return <Input id="1" type="text" labelText="label" />;
// };

// export const Placeholder = Template.bind({});
// Placeholder.args = {
//   id: "1",
//   type: "text",
//   value: "Placeholder",
//   labelText: "label",
//   isError: false,
//   disabled: false,
// };

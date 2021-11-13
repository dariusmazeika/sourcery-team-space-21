import React from "react";
import { Button } from "./Button";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / Button",
  decorators: [withKnobs],
  component: Button,
};

export const Primary = () => {
  return <Button type="primary">{text("Label", "DEFAULT")}</Button>;
};

export const Primary_large = () => {
  return (
    <Button type="primary" size="large">
      {text("Label", "DEFAULT")}
    </Button>
  );
};

export const Text = () => {
  return <Button type="text">{text("Label", "DEFAULT")}</Button>;
};

export const Action = () => {
  return <Button type="action">{text("Label", "X")}</Button>;
};

export const Action_large = () => {
  return (
    <Button type="action" size="large">
      {text("Label", "X")}
    </Button>
  );
};

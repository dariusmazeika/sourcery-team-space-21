import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Icon from "./icon";

export default {
  title: "Components / Icon",
  decorators: [withKnobs],
};

export const Default = () => {
  return <Icon />;
};

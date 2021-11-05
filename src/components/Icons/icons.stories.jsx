import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Icons from "./Icons";

export default {
  title: "Components / Icons",
  decorators: [withKnobs],
};

export const Player = () => {
  return <Icons />;
};

import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { IconPause, IconPlay, IconStop } from "./library/index";

export default {
  title: "Components / Icon",
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div>
      <IconPause currentColor={"#000"} size={"2em"} />
      <IconPlay currentColor={"#000"} size={"1.5em"} />
      <IconStop currentColor={"#000"} size={"1em"} />
    </div>
  );
};

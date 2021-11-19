import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import {
  IconActionCirclePause,
  IconActionCirclePlay,
  IconActionCircleStop,
  IconBookBookmark,
  IconChevronSingledown,
  IconLocationCompass,
  IconLocationHome,
  IconLogOut,
  IconMainSettings,
  IconNotificationBell,
} from "./library/index";

export default {
  title: "Components / Icon",
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div>
      <IconActionCirclePause currentColor={"#000"} size={"2em"} />
      <IconActionCirclePlay currentColor={"#000"} size={"1.5em"} />
      <IconActionCircleStop currentColor={"#000"} size={"1em"} />
      <IconBookBookmark currentColor={"#000"} size={"2em"} />
      <IconChevronSingledown currentColor={"#000"} size={"1.5em"} />
      <IconLocationCompass currentColor={"#000"} size={"1em"} />
      <IconLocationHome currentColor={"#000"} size={"2em"} />
      <IconLogOut currentColor={"#000"} size={"1.5em"} />
      <IconMainSettings currentColor={"#000"} size={"1em"} />
      <IconNotificationBell currentColor={"#000"} size={"1em"} />
    </div>
  );
};

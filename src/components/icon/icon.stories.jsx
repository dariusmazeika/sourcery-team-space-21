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
  IconCheckInPerson,
} from "./library/index";

export default {
  title: "Components / Icon",
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div>
      <IconActionCirclePause currentColor={"#000"} size={"5em"} />
      <IconActionCirclePlay currentColor={"#000"} size={"5em"} />
      <IconActionCircleStop currentColor={"#000"} size={"5em"} />
      <IconBookBookmark currentColor={"#000"} size={"5em"} />
      <IconChevronSingledown currentColor={"#000"} size={"5em"} />
      <IconLocationCompass currentColor={"#000"} size={"5em"} />
      <IconLocationHome currentColor={"#000"} size={"5em"} />
      <IconLogOut currentColor={"#000"} size={"5em"} />
      <IconMainSettings currentColor={"#000"} size={"5em"} />
      <IconNotificationBell currentColor={"#000"} size={"5em"} />
      <IconCheckInPerson currentColor={"#000"} size={"5em"} />
    </div>
  );
};

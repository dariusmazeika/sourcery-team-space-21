import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ReservationsWidget } from "./ReservationsWidget";

export default {
  title: "Components / ReservationsWidget",
  component: ReservationsWidget,
  decorators: [withKnobs],
};

export const Widget = () => {
  return <ReservationsWidget />;
};

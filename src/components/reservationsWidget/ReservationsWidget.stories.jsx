import React from "react";
import { withKnobs, number, select } from "@storybook/addon-knobs";
import { ReservationsItem } from "./reservationsItem/ReservationsItem";
import { ReservationsWidget } from "./ReservationsWidget";

export default {
  title: "Components / ReservationsWidget",
  component: ReservationsWidget,
  subcomponents: { ReservationsItem },
  decorators: [withKnobs],
};

const typeOptions = {
  Rooms: "rooms",
  Devices: "devices",
  Books: "books",
};

export const Widget = () => {
  return <ReservationsWidget />;
};

export const Item = () => {
  return (
    <ReservationsItem
      itemName={select("Item", typeOptions, "rooms")}
      numberReserved={number("No. Reserved", 0)}
    />
  );
};

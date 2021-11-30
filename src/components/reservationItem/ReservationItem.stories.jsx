import React from "react";
import { withKnobs, number, select } from "@storybook/addon-knobs";
import { ReservationItem } from "./ReservationItem";

export default {
  title: "Components / ReservationsWidget",
  component: ReservationItem,
  decorators: [withKnobs],
};

const typeOptions = {
  Rooms: "rooms",
  Devices: "devices",
  Books: "books",
};

export const Item = () => {
  return (
    <ReservationItem
      itemName={select("Item", typeOptions, "rooms")}
      numberReserved={number("No. Reserved", 0)}
    />
  );
};

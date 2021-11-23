import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / RestaurantCard",
  decorators: [withKnobs],
  component: RestaurantCard,
};

export const RestaurantCardComponent = () => <RestaurantCard />;

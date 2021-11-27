import React from "react";
import FavoriteButton from "./FavoriteButton";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / FavoriteButton",
  component: FavoriteButton,
  decorators: [withKnobs],
};

export const Default = () => {
  return <FavoriteButton />;
};

import React from "react";
import RestaurantCard from "./RestaurantCard";
import { text, withKnobs } from "@storybook/addon-knobs";

import mockPhoto from "assets/restaurant-card-placeholder.jpg";

const photoOptions = {
  photo1: mockPhoto,
};

export default {
  title: "Components / RestaurantCard",
  decorators: [withKnobs],
  component: RestaurantCard,
};

export const RestaurantCardComponent = () => {
  return (
    <RestaurantCard
      cardTitle={text(
        "Restaurant title",
        "Restaurant long title, exceeding the limits of text"
      )}
      restaurantPhoto={photoOptions.photo1}
      cardTopTextCategory1={text("Top category one", "category1")}
      cardTopTextCategory2={text("Top category two", "category2")}
      cardTopTextCategory3={text("Top category three", "category3")}
      cardOpenTime={text("Open time", "00:00")}
      cardClosingTime={text("Closing time", "00:00")}
    />
  );
};

// const value = select(label, options, defaultValue, groupId);

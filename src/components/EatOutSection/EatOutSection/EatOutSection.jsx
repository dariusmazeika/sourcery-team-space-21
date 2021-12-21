import React from "react";
import PropTypes from "prop-types";
import styles from "./eatOutSection.module.scss";
import { BrowseCard } from "components/EatOutSection";
import { RestaurantCard } from "components/EatOutSection";

const getBestRated = (restaurants) => {
  restaurants.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  return restaurants.slice(0, 2);
};

const addLiked = (restaurants, likedData = []) => {
  const liked = new Set(likedData.map((restaurant) => restaurant.id));
  return restaurants.map((restaurant) => ({
    ...restaurant,
    isLiked: liked.has(restaurant.id),
  }));
};

export const EatOutSection = ({ data }) => {
  const bestRestaurants = data.restaurants
    ? addLiked(
        getBestRated(data.restaurants),
        data.userData[0]?.liked.restaurants
      )
    : [];

  return (
    <ul className={styles.widgetListBox}>
      <li className={styles.widgetListBoxItem}>
        <BrowseCard />
      </li>
      {bestRestaurants.map((restaurantData, index) => (
        <li key={restaurantData.id} className={styles.widgetListBoxItem}>
          <RestaurantCard data={restaurantData} />
        </li>
      ))}
    </ul>
  );
};

EatOutSection.propTypes = { data: PropTypes.object };

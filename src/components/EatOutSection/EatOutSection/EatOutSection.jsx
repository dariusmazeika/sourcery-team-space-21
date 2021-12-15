import React from "react";
import PropTypes from "prop-types";
import styles from "./eatOutSection.module.scss";
import { BrowseCard } from "components/EatOutSection";
import { RestaurantCard } from "components/EatOutSection";

const getBestRated = (restaurants) => {
  restaurants.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  return restaurants.slice(0, 2);
};

export const EatOutSection = ({ data }) => {
  const bestRestaurants = data.restaurants ? getBestRated(data.restaurants) : 0;

  return (
    <ul className={styles.widgetListBox}>
      <li className={styles.widgetListBoxItem}>
        <BrowseCard />
      </li>
      {bestRestaurants &&
        bestRestaurants.map((data, index) => (
          <li key={data.id} className={styles.widgetListBoxItem}>
            <RestaurantCard data={data} />
          </li>
        ))}
    </ul>
  );
};

EatOutSection.propTypes = { data: PropTypes.object };

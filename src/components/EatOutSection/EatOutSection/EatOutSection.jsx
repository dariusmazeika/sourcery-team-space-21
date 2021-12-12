import React from "react";
import PropTypes from "prop-types";
import styles from "./eatOutSection.module.scss";
import { BrowseCard } from "components/EatOutSection";
import { MockCard } from "./MockCard";

const getRatings = (data) => {
  let ratings = [];
  const initRestaurants = data.restaurants;
  for (let restaurant of initRestaurants) {
    let rating = 0;
    let ratingSum = 0;
    if (restaurant.reviews && !!restaurant.reviews.length) {
      for (let review of restaurant.reviews) {
        ratingSum += review.rating;
      }
      rating = Math.round((ratingSum / restaurant.reviews.length) * 10) / 10;
    }
    ratings.push(rating);
  }
  const restaurants = initRestaurants.map((restaurant, index) => {
    return { ...restaurant, rating: ratings[index] };
  });
  return restaurants;
};

const getBestRated = (restaurants) => {
  restaurants.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  return restaurants.slice(0, 2);
};

export const EatOutSection = ({ data }) => {
  const bestRestaurants = data.restaurants ? getBestRated(getRatings(data)) : 0;

  return (
    <ul className={styles.widgetListBox}>
      <li key="browse-restaurants" className={styles.widgetListBoxItem}>
        <BrowseCard />
      </li>
      {bestRestaurants &&
        bestRestaurants.map(
          ({ id, name, checkIns, rating, categories }, index) => (
            <li key={`${id}-${index}`} className={styles.widgetListBoxItem}>
              <MockCard
                name={name}
                checkIns={checkIns}
                rating={rating}
                categories={categories} //TODO: pass in openingHours
              />
            </li>
          )
        )}
    </ul>
  );
};

EatOutSection.propTypes = { data: PropTypes.object };

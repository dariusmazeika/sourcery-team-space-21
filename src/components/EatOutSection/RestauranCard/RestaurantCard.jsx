import React from "react";
import PropTypes from "prop-types";
import styles from "./restaurant-card.module.scss";

export const RestaurantCard = (props) => {
  return (
    <section>
      <p className={styles.test}>Test</p>
    </section>
  );
};

RestaurantCard.propTypes = {
  children: PropTypes.any,
};

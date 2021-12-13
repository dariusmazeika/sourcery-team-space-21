import React from "react";
import PropTypes from "prop-types";
import styles from "./placeholder-card.module.scss";

export const PlaceholderCard = ({
  data: { name = "restaurant", rating = 3 },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.raiting}>{rating}</div>
      <h3>{name}</h3>
      <div>test</div>
    </div>
  );
};

PlaceholderCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  data: PropTypes.object,
};

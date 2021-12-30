import React from "react";
import PropTypes from "prop-types";
import styles from "./star-rating.module.scss";
import { Icon } from "components/iconSprite/Icon";

export const StarRating = ({ rating }) => {
  const ratingNumber = rating ? rating : "-";
  return (
    <div className={styles.rating}>
      <Icon className={styles.ratingIcon} name="icon-action-star-filled" />
      <p className={styles.ratingNumber}>{ratingNumber}</p>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

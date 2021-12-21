import React from "react";
import PropTypes from "prop-types";
import styles from "./star-rating.module.scss";
import { Icon } from "components/iconSprite/Icon";

export const StarRating = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <Icon className={styles.ratingIcon} name="icon-action-star-filled" />
      {rating && <p className={styles.ratingNumber}>{rating}</p>}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

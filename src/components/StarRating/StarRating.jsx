import { Icon } from "components/iconSprite/Icon";
import React from "react";
import styles from "./star-rating.module.scss";
import PropTypes from "prop-types";

export const StarRating = ({ rating = "1.0" }) => {
  return (
    <div className={styles.ratingWrapper}>
      <Icon
        className={styles.ratingWrapperIcon}
        name="icon-action-star-filled"
      />
      <p className={styles.ratingWrapperNumber}>{rating}</p>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.any,
};

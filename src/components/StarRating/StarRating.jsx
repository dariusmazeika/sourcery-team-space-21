import React from "react";
import PropTypes from "prop-types";
import styles from "./star-rating.module.scss";
import { Icon } from "components/iconSprite/Icon";
import cx from "classnames";

export const StarRating = ({ rating, className }) => {
  return (
    <div
      className={cx(className, {
        [styles.rating]: true,
      })}
    >
      <Icon className={styles.ratingIcon} name="icon-action-star-filled" />
      {rating && <p className={styles.ratingNumber}>{rating}</p>}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  className: PropTypes.string,
};

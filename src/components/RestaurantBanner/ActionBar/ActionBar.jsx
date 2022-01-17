import React from "react";
import PropTypes from "prop-types";
import { FavoriteButton } from "components/favoriteButton";
import styles from "./ActionBar.module.scss";
import { StarRating } from "components/StarRating/StarRating";

// TODO: add CheckIn later when they are done

export const ActionBar = ({
  checkIns,
  isLiked,
  rating,
  handleFavoriteButtonClick,
}) => (
  <div className={styles.box}>
    <div className={styles.actionGroup}>
      <StarRating rating={rating} />
      <FavoriteButton
        isFavorite={isLiked}
        onClick={handleFavoriteButtonClick}
      />
    </div>
    <p className="caption">
      {checkIns > 0
        ? `${checkIns} people already checked-in!`
        : "no one checked-in yet!"}
    </p>
    <div className={styles.actionGroup}></div>
  </div>
);

ActionBar.propTypes = {
  checkIns: PropTypes.number,
  isLiked: PropTypes.bool,
  rating: PropTypes.number,
  handleFavoriteButtonClick: PropTypes.func,
};

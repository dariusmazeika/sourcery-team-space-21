import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { IconHeart } from "components/icon/library/index";
import styles from "./favoriteButton.module.scss";

export const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <div>
      <IconHeart
        onClick={onClick}
        className={cx(styles.heart, { [styles.heartIsFilled]: isFavorite })}
      />
    </div>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};

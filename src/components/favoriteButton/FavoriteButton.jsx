import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { IconHeart } from "components/icon/library/index";
import styles from "./favoriteButton.module.scss";

const FavoriteButton = (props) => {
  const [isFavorite, setFavorite] = useState(false);
  const onClick = () => setFavorite(!isFavorite);

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
  props: PropTypes.any,
};

export default FavoriteButton;

import { Icon } from "components/iconSprite/Icon";
import React from "react";
import styles from "./star-rating.module.scss";

export const StarRating = () => {
  return (
    <div className={styles.ratingWrapper}>
      <Icon className={styles.ratingIcon} name="icon-action-star-filled" />
      <p className={styles.ratingNumber}>4.5</p>
    </div>
  );
};

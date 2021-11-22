import React from "react";
import PropTypes from "prop-types";
import styles from "./restaurant-card.module.scss";

import placeholderPhoto from "assets/restaurant-card-placeholder.jpg";

export const RestaurantCard = (props) => {
  const roundIcon = <div className={styles.ellipse}></div>;

  return (
    <section className={styles.card}>
      <img
        className={styles.placeholderPhoto}
        src={placeholderPhoto}
        alt="Restaurant Snapshot"
      />
      <div className={styles.checkIn}></div>
      <div className={styles.rating}></div>
      <div className={styles.details}>
        <div className={styles.topTextWrapper}>
          <p className={styles.topText}>salads</p>
          {roundIcon}
          <p className={styles.topText}>snacks</p>
          {roundIcon}
          <p className={styles.topText}>pizza</p>
        </div>
        <h3 className={styles.title}>Ristorante Viva Piccola Italia</h3>
        <p className={styles.bottomText}>10:00 - 21:00</p>
      </div>
      <div className={styles.wishlist}></div>
    </section>
  );
};

RestaurantCard.propTypes = {
  children: PropTypes.any,
};

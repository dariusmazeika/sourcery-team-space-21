import React from "react";
import styles from "./restaurant-card.module.scss";
import PropTypes from "prop-types";

export const RestaurantCard = ({ data }) => {
  const { categories, image, name, openingHours } = data;
  const currentDate = new Date().getDay();

  const WorkingWeekDays = openingHours.map((item, i) => (
    <p key={`${i}`} className={styles.bottomText}>
      {item.days === "Monday - Friday" ? item.hours : ""}
    </p>
  ));
  const WorkingWeekendDays = openingHours.map((item, i) => (
    <p key={`${i}`} className={styles.bottomText}>
      {item.days === "Saturday - Sunday" ? item.hours : ""}
    </p>
  ));

  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.checkIn}></div>
      <div className={styles.rating}></div>
      <div className={styles.lowerWrapper}>
        <div className={styles.details}>
          <div className={styles.topTextWrapper}>
            {categories.map((category, index) => (
              <p key={`${index}`} className={styles.topText}>
                {category}
              </p>
            ))}
          </div>
          <h3 className={styles.title}>{name}</h3>
          <div>
            {currentDate === 0 || currentDate === 6
              ? WorkingWeekendDays
              : WorkingWeekDays}
          </div>
        </div>
        <div className={styles.wishlist}></div>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.any,
  category: PropTypes.string,
  name: PropTypes.string,
  openingHours: PropTypes.string,
};

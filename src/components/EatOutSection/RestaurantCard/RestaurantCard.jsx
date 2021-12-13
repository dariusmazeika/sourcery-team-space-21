import React from "react";
import styles from "./restaurant-card.module.scss";
import PropTypes from "prop-types";
import { BlankCard } from "components/EatOutSection";

export const RestaurantCard = ({ data }) => {
  const { categories, image, name, openingHours } = data;

  const WorkingDays = openingHours.map((item, i) => (
    <p
      key={i}
      className={styles.workingDays}
    >{`${item.days}: ${item.hours}`}</p>
  ));

  return (
    <BlankCard>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.checkIn}></div>
        <div className={styles.rating}></div>
        <div className={styles.lowerWrapper}>
          <div className={styles.details}>
            <div className={styles.topTextWrapper}>
              {categories.map((category, index) => (
                <p key={`${category}-${index}`} className={styles.topText}>
                  {category}
                </p>
              ))}
            </div>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.workingDaysWrapper}>{WorkingDays}</div>
          </div>
          <div className={styles.wishlist}></div>
        </div>
      </div>
    </BlankCard>
  );
};

RestaurantCard.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.any,
  category: PropTypes.string,
  name: PropTypes.string,
  openingHours: PropTypes.string,
};

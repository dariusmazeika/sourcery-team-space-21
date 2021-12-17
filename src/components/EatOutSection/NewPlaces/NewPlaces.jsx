import React from "react";
import { BlankCard } from "../BlankCard/BlankCard";
import styles from "./new-places.module.scss";
import PropTypes from "prop-types";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";

export const NewPlaces = ({ restaurant }) => {
  const WorkingDays = restaurant.openingHours ? (
    restaurant.openingHours.map((item, i) => (
      <p
        key={i}
        className={styles.workingDays}
      >{`${item.days}: ${item.hours}`}</p>
    ))
  ) : (
    <br />
  );

  return (
    <BlankCard>
      <div className={styles.card}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${restaurant?.image})` }}
        >
          <div className={styles.cardTopWrapper}></div>
        </div>
        <div className={styles.lowerWrapper}>
          <div className={styles.details}>
            <div className={styles.topTextWrapper}>
              {restaurant.categories &&
                restaurant.categories.slice(0, 3).map((category, index) => (
                  <p key={`${category}-${index}`} className={styles.topText}>
                    {category}
                  </p>
                ))}
            </div>
            <div className={styles.titleWrapper}>
              <h3 className={styles.title}>{restaurant.name}</h3>
              <FavoriteButton />
              {/* TODO: pass in isFavorite */}
            </div>
            <div className={styles.workingDaysWrapper}>{WorkingDays}</div>
          </div>
        </div>
      </div>
    </BlankCard>
  );
};

NewPlaces.propTypes = {
  restaurant: PropTypes.object,
};

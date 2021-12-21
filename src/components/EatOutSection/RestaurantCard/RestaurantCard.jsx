import React from "react";
import styles from "./restaurant-card.module.scss";
import PropTypes from "prop-types";
import { BlankCard } from "components/EatOutSection";
import { CheckIn } from "components/CheckIn/CheckIn";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";
import { StarRating } from "components/StarRating/StarRating";

// TODO:Take in userData and check if restaurant is liked by the user
export const RestaurantCard = ({ data }) => {
  const { categories, image, name, openingHours, checkIns, rating } = data;

  const WorkingDays = openingHours ? (
    openingHours.map((item, i) => (
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
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.cardTopWrapper}>
          <CheckIn count={checkIns} />
          <StarRating rating={rating} />
        </div>
        <div className={styles.lowerWrapper}>
          <div className={styles.details}>
            <div className={styles.topTextWrapper}>
              {categories &&
                categories.slice(0, 3).map((category, index) => (
                  <p key={`${category}-${index}`} className={styles.topText}>
                    {category}
                  </p>
                ))}
            </div>
            <div className={styles.titleWrapper}>
              <h3 className={styles.title}>{name}</h3>
              <FavoriteButton isFavorite={data.isLiked} />
            </div>
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
};

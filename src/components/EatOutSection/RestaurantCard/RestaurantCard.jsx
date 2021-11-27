import React from "react";
import styles from "./restaurant-card.module.scss";
import PropTypes from "prop-types";

const RestaurantCard = ({
  restaurantPhoto,
  cardTopTextCategory1,
  cardTopTextCategory2,
  cardTopTextCategory3,
  cardTitle,
  cardOpenTime,
  cardClosingTime,
}) => {
  const roundIcon = <div className={styles.ellipse}></div>;

  return (
    <section
      className={styles.card}
      style={{
        backgroundImage: `url(${restaurantPhoto})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        alt: "Restaurant Snapshot",
      }}
    >
      <div className={styles.checkIn}></div>
      <div className={styles.rating}></div>
      <div className={styles.details}>
        <div className={styles.topTextWrapper}>
          <p className={styles.topText}>{cardTopTextCategory1}</p>
          {roundIcon}
          <p className={styles.topText}>{cardTopTextCategory2}</p>
          {roundIcon}
          <p className={styles.topText}>{cardTopTextCategory3}</p>
        </div>
        <h3 className={styles.title}>{cardTitle}</h3>
        <p className={styles.bottomText}>
          {cardOpenTime} - {cardClosingTime}
        </p>
      </div>
      <div className={styles.wishlist}></div>
    </section>
  );
};

RestaurantCard.defaultProps = {
  cardTopTextCategory1: "category1",
  cardTopTextCategory2: "category2",
  cardTopTextCategory3: "category3",
  cardTitle: "Restaurant title",
  cardOpenTime: "00:00",
  cardClosingTime: "00:00",
};

RestaurantCard.propTypes = {
  restaurantPhoto: PropTypes.any,
  cardTopTextCategory1: PropTypes.string,
  cardTopTextCategory2: PropTypes.string,
  cardTopTextCategory3: PropTypes.string,
  cardTitle: PropTypes.string,
  cardOpenTime: PropTypes.string,
  cardClosingTime: PropTypes.string,
};

export default RestaurantCard;

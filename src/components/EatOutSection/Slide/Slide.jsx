import React from "react";
import { BlankCard } from "components/EatOutSection/index";
import styles from "./slide.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Slide = ({ restaurant, next, prev }) => {
  return (
    <div className={styles.heroContainer}>
      <BlankCard>
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.imageContainerImage}
              src={restaurant.image}
              alt=""
            />
            <div className={styles.imageContainerImageLayer}></div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardInfoNavigation}>
              <button onClick={prev}>prev</button>
              <button onClick={next}>next</button>
            </div>
            <p className={styles.cardInfoIntro}>{restaurant.slogan}</p>
            <p className={styles.cardInfoTitle}>{restaurant.name}</p>
            <p className={styles.cardInfoDescription}>
              {restaurant.description}
            </p>
            <Link to={restaurant.id} className={styles.cardInfoLink}>
              Read More
            </Link>
          </div>
        </div>
      </BlankCard>
    </div>
  );
};

Slide.propTypes = {
  restaurant: PropTypes.object,
  prev: PropTypes.func,
  next: PropTypes.func,
};

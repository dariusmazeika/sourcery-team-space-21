import React from "react";
import { BlankCard } from "components/EatOutSection";
import styles from "./slide.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SliderNavigationButtons } from "../../SliderArrows/SliderNavigationButtons";

export const Slide = ({ restaurant, next, prev }) => {
  let description;

  if (restaurant.description.length > 100) {
    description = restaurant.description.split(" ").splice(0, 19).join(" ");
  } else {
    description = restaurant.description.slice(0, -1);
  }

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
            <div className={styles.imageContainerImageLayer} />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardInfoNavigation}>
              <SliderNavigationButtons next={next} prev={prev} />
            </div>
            <p className={styles.cardInfoIntro}>{restaurant.slogan}</p>
            <p className={styles.cardInfoTitle}>{restaurant.name}</p>
            <p className={styles.cardInfoDescription}>
              {description}
              {description.length > 10 && <span className={styles.ellipsis} />}
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

import React from "react";
import { BlankCard } from "components/EatOutSection/index";
import styles from "./hero-slider.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const EatOutHeroSlider = ({ restaurant }) => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroContainerTitle}>
        Hungry? Find the best place!
      </h1>
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
              {/*<button onClick={sliderRef?.slickPrev}>prev</button>*/}
              {/*<button onClick={sliderRef?.slickNext}>next</button>*/}
            </div>
            <p className={styles.cardInfoIntro}>{restaurant.slogan}</p>
            <p className={styles.cardInfoTitle}>{restaurant.name}</p>
            <p className={styles.cardInfoDescription}>
              {restaurant.description}
            </p>
            <Link to={"#"} className={styles.cardInfoLink}>
              Read More
            </Link>
          </div>
        </div>
      </BlankCard>
    </div>
  );
};

EatOutHeroSlider.propTypes = {
  restaurant: PropTypes.object,
};

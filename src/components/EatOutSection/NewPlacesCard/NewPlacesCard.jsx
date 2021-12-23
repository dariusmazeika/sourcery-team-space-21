import React from "react";
import { BlankCard } from "../BlankCard/BlankCard";
import styles from "./new-places-card.module.scss";
import PropTypes from "prop-types";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";
import { Icon } from "components/iconSprite/Icon";
import { Link } from "react-router-dom";

export const NewPlacesCard = ({ restaurant }) => {
  const workingDays = restaurant.openingHours ? (
    restaurant.openingHours.map((item, i) => (
      <div
        key={i}
        className={styles.workingDays}
      >{`${item.days}: ${item.hours}`}</div>
    ))
  ) : (
    <br />
  );

  const description = restaurant.description;

  return (
    <BlankCard className={styles.cardContainer}>
      <div className={styles.cardTopWrapper}>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageContainerImage}
            src={restaurant.image}
            alt=""
          />
          <div className={styles.imageContainerImageLayer}></div>
        </div>
      </div>
      <div className={styles.categoriesWrapper}>
        {restaurant.categories &&
          restaurant.categories.slice(0, 3).map((category, index) => (
            <p key={`${category}-${index}`} className={styles.categories}>
              {category}
            </p>
          ))}
      </div>
      <div className={styles.bottomText}>
        <div className={styles.bottomTextTitleWrapper}>
          <h3 className={styles.bottomTextTitle}>{restaurant.name}</h3>
          <div className={styles.bottomTextFavorite}>
            <FavoriteButton />
          </div>
        </div>
        <div className={styles.bottomTextWorkingDays}>{workingDays}</div>
        <div className={styles.bottomTextWebsite}>
          <Icon
            className={styles.icon}
            name="icon-location-globe"
            size="medium"
          />

          <a className={styles.bottomTextWebsiteLink} href={restaurant.website}>
            {restaurant.website}
          </a>
        </div>
        <div className={styles.bottomTextLocation}>
          <Icon
            className={styles.icon}
            name="icon-location-map-pin"
            size="medium"
          />
          {restaurant.location.address}
        </div>
        <p className={styles.bottomTextDescription}>
          {description.length < 50
            ? `${description} `
            : `${description.substr(0, 120)}\u2026 `}
        </p>
        <div className={styles.linkContainer}>
          <Link to={restaurant.id} className={styles.linkContainerLink}>
            READ MORE
          </Link>
        </div>
      </div>
    </BlankCard>
  );
};

NewPlacesCard.propTypes = {
  restaurant: PropTypes.object,
};

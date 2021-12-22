import React from "react";
import { BlankCard } from "../BlankCard/BlankCard";
import styles from "./new-places-card.module.scss";
import PropTypes from "prop-types";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";
import { Icon } from "components/iconSprite/Icon";
import { Link } from "react-router-dom";

export const NewPlacesCard = ({ restaurant }) => {
  const WorkingDays = restaurant.openingHours ? (
    restaurant.openingHours.map((item, i) => (
      <div
        key={i}
        className={styles.workingDays}
      >{`${item.days}: ${item.hours}`}</div>
    ))
  ) : (
    <br />
  );

  let description = restaurant.description.split(" ").splice(0, 17).join(" ");
  const lastCharacter = description.substr(description.length - 1);

  if (
    lastCharacter === "." ||
    lastCharacter === "," ||
    lastCharacter === "-" ||
    lastCharacter === "?" ||
    lastCharacter === "!"
  ) {
    description = restaurant.description.split(" ").splice(0, 17).join(" ");
  }

  return (
    <div className={styles.cardContainer}>
      <BlankCard>
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
          <div className={styles.bottomTextWorkingDays}>{WorkingDays}</div>
          <div className={styles.bottomTextWebsite}>
            <Icon
              className={styles.icon}
              name="icon-location-globe"
              size="medium"
            />

            {restaurant.website}
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
            {description}
            {description.length > 150 && <span>&#8230;</span>}
          </p>
          <div className={styles.linkContainer}>
            <Link to={restaurant.id} className={styles.linkContainerLink}>
              READ MORE
            </Link>
          </div>
        </div>
      </BlankCard>
    </div>
  );
};

NewPlacesCard.propTypes = {
  restaurant: PropTypes.object,
};

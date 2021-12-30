import React from "react";
import styles from "./restaurant-card.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BlankCard } from "components/EatOutSection";
import { CheckIn } from "components/CheckIn/CheckIn";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";
import { StarRating } from "components/StarRating/StarRating";
import cx from "classnames";
import { Icon } from "components/iconSprite/Icon";

export const RestaurantCard = ({ data, className, renderMoreInfo = false }) => {
  const {
    categories,
    image,
    name,
    openingHours,
    checkIns,
    rating,
    id,
    isLiked,
  } = data;
  const restaurantLink = `/eat-out/${id}`;

  const WorkingDays = openingHours ? (
    openingHours.map((item, i) => (
      <p
        key={`${item.days}${i}`}
        className={styles.workingDays}
      >{`${item.days}: ${item.hours}`}</p>
    ))
  ) : (
    <br />
  );

  const description = data.description;

  return (
    <BlankCard className={cx(className, styles.blankCard)}>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        {!renderMoreInfo && (
          <div className={styles.cardTopWrapper}>
            <CheckIn count={checkIns} />
            <StarRating rating={rating} />
          </div>
        )}
        {renderMoreInfo && (
          <div className={styles.cardTopWrapperNewPlaces}>
            <StarRating rating={rating} />
          </div>
        )}

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
              <Link to={restaurantLink} className={styles.title}>
                {name}
              </Link>
              <FavoriteButton isFavorite={isLiked} />
            </div>
            <div className={styles.workingDaysWrapper}>{WorkingDays}</div>
          </div>
          <div className={styles.wishlist}></div>
        </div>
      </div>
      {renderMoreInfo && (
        <div className={styles.bottomText}>
          <div className={styles.bottomTextWebsite}>
            <Icon
              className={styles.icon}
              name="icon-location-globe"
              size="medium"
            />
            <a className={styles.bottomTextWebsiteLink} href={data.website}>
              {data.website}
            </a>
          </div>
          <div className={styles.bottomTextLocation}>
            <Icon
              className={styles.icon}
              name="icon-location-map-pin"
              size="medium"
            />
            {data.location.address}
          </div>
          <p className={styles.bottomTextDescription}>
            {description.length < 50
              ? `${description} `
              : `${description.substr(0, 110)}\u2026 `}
          </p>
          <div className={styles.readMore}>
            <Link to={data.id} className={styles.readMoreLink}>
              READ MORE
            </Link>
          </div>
        </div>
      )}
    </BlankCard>
  );
};

RestaurantCard.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  renderMoreInfo: PropTypes.bool,
};

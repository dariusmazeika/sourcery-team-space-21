import React, { useState } from "react";
import PropTypes from "prop-types";

import { SliderArrows } from "components/SliderArrows/SliderArrows";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

import styles from "./similar-places-section.module.scss";
import Slider from "react-slick";

export const SimilarPlacesSection = ({ data, currentRestaurant }) => {
  const [sliderPlacesRef, setSliderPlacesRef] = useState(null);
  let helperRestaurantsArray = [];
  let filteredRestaurantsByCategories = [];

  const filterRestaurantsByCategories = () => {
    data.restaurants.forEach((restaurant) => {
      const intersection = restaurant.categories.filter((element) => {
        return currentRestaurant.categories.includes(element);
      });

      helperRestaurantsArray.push({
        ...restaurant,
        matchCount: intersection.length,
      });

      filteredRestaurantsByCategories = helperRestaurantsArray
        .filter((restaurant) => restaurant.matchCount > 0)
        .sort((firstEl, secondEl) =>
          firstEl.matchCount > secondEl.matchCount
            ? -1
            : secondEl.matchCount > firstEl.matchCount
            ? 1
            : 0
        )
        .filter((restaurant) => restaurant.id !== currentRestaurant.id);
    });
  };

  filterRestaurantsByCategories();

  const nextPlacesSlide = () => {
    sliderPlacesRef.slickNext();
  };

  const prevPlacesSlide = () => {
    sliderPlacesRef.slickPrev();
  };

  const sliderSettingsNewPlaces = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: filteredRestaurantsByCategories.length > 1,
    dots: false,
    arrows: false,
  };

  return (
    <>
      <div className={styles.newPlacesTop}>
        <h2 className={"heading2-alt"}>Also you could like</h2>
        {filteredRestaurantsByCategories.length > 1 && (
          <SliderArrows next={nextPlacesSlide} prev={prevPlacesSlide} />
        )}
      </div>
      <div className={styles.newPlacesSlidesContainer}>
        <Slider ref={setSliderPlacesRef} {...sliderSettingsNewPlaces}>
          {filteredRestaurantsByCategories?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              data={restaurant}
              renderMoreInfo={true}
              className={styles.restaurantCard}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

SimilarPlacesSection.propTypes = {
  data: PropTypes.object,
  currentRestaurant: PropTypes.object,
};

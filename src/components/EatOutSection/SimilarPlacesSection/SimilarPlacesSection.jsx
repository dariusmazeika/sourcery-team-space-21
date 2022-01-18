import React, { useEffect, useState } from "react";

import { SliderArrows } from "components/SliderArrows/SliderArrows";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

import styles from "./similar-places-section.module.scss";
import Slider from "react-slick";
import { useAPI } from "features";
import { useParams } from "react-router-dom";

export const SimilarPlacesSection = () => {
  const [sliderPlacesRef, setSliderPlacesRef] = useState(null);
  const [contextData, fetchContextData] = useAPI();
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchContextData("restaurants", "userData");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRestaurant = contextData?.restaurants?.find(
    (restaurant) => restaurant.id === restaurantId
  );

  const restaurantsList = contextData?.restaurants
    ? contextData.restaurants
    : [];

  const currentRestaurantCategories = filteredRestaurant?.categories
    ? filteredRestaurant.categories
    : [];

  const matchedCategoriesCount = [];

  restaurantsList.forEach((restaurant) => {
    const matchedCategories = restaurant.categories.filter((category) =>
      currentRestaurantCategories.includes(category)
    );
    if (matchedCategories.length > 0) {
      matchedCategoriesCount.push({
        restaurant,
        matchedCategoriesCount: matchedCategories.length,
      });
    }
    return matchedCategories.length > 0;
  });
  matchedCategoriesCount
    .sort((a, b) =>
      a.matchedCategoriesCount > b.matchedCategoriesCount
        ? -1
        : b.matchedCategoriesCount > a.matchedCategoriesCount
        ? 1
        : 0
    )
    .map((item) => item.restaurant);

  const sortedRestaurantByCount = matchedCategoriesCount.map(
    (item) => item.restaurant
  );

  const nextPlacesSlide = () => {
    sliderPlacesRef.slickNext();
  };

  const prevPlacesSlide = () => {
    sliderPlacesRef.slickPrev();
  };

  const sliderSettingsNewPlaces = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: sortedRestaurantByCount.length > 2,
    dots: false,
    arrows: false,
  };

  return (
    <>
      <div className={styles.newPlacesTop}>
        <h2 className={"heading2-alt"}>Also you could like</h2>
        {sortedRestaurantByCount.length > 2 && (
          <SliderArrows next={nextPlacesSlide} prev={prevPlacesSlide} />
        )}
      </div>
      <div className={styles.newPlacesSlidesContainer}>
        <Slider ref={setSliderPlacesRef} {...sliderSettingsNewPlaces}>
          {sortedRestaurantByCount?.map((restaurant) => (
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

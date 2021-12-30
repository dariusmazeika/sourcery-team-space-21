import React, { useState } from "react";
import styles from "./new-places-section.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderArrows } from "components/SliderArrows/SliderArrows";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

export const NewPlacesSection = (data) => {
  const [sliderPlacesRef, setSliderPlacesRef] = useState(null);

  const nextPlacesSlide = () => {
    sliderPlacesRef.slickNext();
  };

  const prevPlacesSlide = () => {
    sliderPlacesRef.slickPrev();
  };

  const sliderSettingsNewPlaces = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: false,
    arrows: false,
  };

  return (
    <>
      <div className={styles.newPlacesTop}>
        <h2 className={styles.newPlacesTopTitle}>New places</h2>
        <SliderArrows next={nextPlacesSlide} prev={prevPlacesSlide} />
      </div>
      <div className={styles.newPlacesSlidesContainer}>
        <Slider ref={setSliderPlacesRef} {...sliderSettingsNewPlaces}>
          {data.data.restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
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

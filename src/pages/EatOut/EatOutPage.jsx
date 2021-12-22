import React, { useEffect, useState } from "react";
import { useAPI } from "features/context";
import { BreadCrumbs } from "components/Breadcrumbs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EatOutHeroSlider } from "components/EatOutSection";
import { NewPlacesCard } from "components/EatOutSection";
import styles from "./EatOutPage.module.scss";
import { SliderNavigationButtons } from "components/EatOutSection/SliderNavigationButton/SliderNavigationButtons";

export const EatOutPage = () => {
  const [data, getData] = useAPI();
  const [sliderRef, setSliderRef] = useState(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const prev = () => {
    sliderRef.slickPrev();
  };

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
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
      <BreadCrumbs />
      <Slider {...sliderSettings}>
        {data.restaurants?.map((restaurant, index) => (
          <EatOutHeroSlider key={restaurant.name} restaurant={restaurant} />
        ))}
      </Slider>

      <div className={styles.newPlacesTop}>
        <h2 className={styles.newPlacesTopTitle}>New places</h2>
        <SliderNavigationButtons next={next} prev={prev} />
      </div>
      <div className={styles.newPlacesSlidesContainer}>
        <Slider ref={setSliderRef} {...sliderSettingsNewPlaces}>
          {data.restaurants?.map((restaurant, index) => (
            <NewPlacesCard key={restaurant.name} restaurant={restaurant} />
          ))}
        </Slider>
      </div>
    </>
  );
};

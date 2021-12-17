import React, { useEffect, useState } from "react";
import { useAPI } from "features/context";
import { BreadCrumbs } from "components/Breadcrumbs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EatOutHeroSlider } from "components/EatOutSection";
import { NewPlaces } from "components/EatOutSection";
import styles from "./EatOutPage.module.scss";

export const EatOutPage = () => {
  const [data, getData] = useAPI();
  const [sliderRef, setSliderRef] = useState(null);

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
  };

  return (
    <>
      <BreadCrumbs />
      <Slider {...sliderSettings}>
        {data.restaurants?.map((restaurant, index) => (
          <EatOutHeroSlider key={restaurant.name} restaurant={restaurant} />
        ))}
      </Slider>
      <section className={styles.newPlaces}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.newPlacesTitle}>New places</h2>
          <div className={styles.btn}>
            <button onClick={sliderRef?.slickPrev}>prev</button>
            <button onClick={sliderRef?.slickNext}>next</button>
          </div>
        </div>
        <Slider ref={setSliderRef} {...sliderSettingsNewPlaces}>
          {data.restaurants?.map((restaurant, index) => (
            <NewPlaces key={restaurant.name} restaurant={restaurant} />
          ))}
        </Slider>
      </section>
    </>
  );
};

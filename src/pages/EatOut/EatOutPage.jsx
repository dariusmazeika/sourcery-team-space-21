import React, { useEffect, useState } from "react";
import { useAPI } from "features/context";
import { BreadCrumbs } from "components/Breadcrumbs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "components/EatOutSection";
import styles from "./eat-out.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_slide.scss";
import { NewPlacesSection } from "components/EatOutSection/NewPlacesSection/NewPlacesSection";

export const EatOutPage = () => {
  const [data, getData] = useAPI();
  const [sliderHeroRef, setSliderHeroRef] = useState(null);

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  const nextHeroSlide = () => {
    sliderHeroRef.slickNext();
  };

  const prevHeroSlide = () => {
    sliderHeroRef.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
  };

  return (
    <>
      <BreadCrumbs />
      <h1 className={styles.sliderTitle}>Hungry? Find the best place!</h1>
      <Slider ref={setSliderHeroRef} {...sliderSettings}>
        {data.restaurants?.map((restaurant) => (
          <Slide
            key={restaurant.name}
            restaurant={restaurant}
            next={nextHeroSlide}
            prev={prevHeroSlide}
          />
        ))}
      </Slider>

      <NewPlacesSection data={data} />
    </>
  );
};

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

export const EatOutPage = () => {
  const [data, getData] = useAPI();
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  const next = () => {
    sliderRef.slickNext();
  };

  const prev = () => {
    sliderRef.slickPrev();
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
      <Slider ref={setSliderRef} {...sliderSettings}>
        {data.restaurants?.map((restaurant) => (
          <Slide
            key={restaurant.name}
            restaurant={restaurant}
            next={next}
            prev={prev}
          />
        ))}
      </Slider>
    </>
  );
};

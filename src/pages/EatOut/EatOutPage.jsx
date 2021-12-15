import React, { useEffect } from "react";
import { useAPI } from "features/context";
import { BreadCrumbs } from "components/Breadcrumbs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EatOutHeroSlider } from "components/EatOutSection";

export const EatOutPage = () => {
  const [data, getData] = useAPI();

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
  };

  return (
    <>
      <BreadCrumbs />
      <Slider {...sliderSettings}>
        {data.restaurants?.map((restaurant, index) => (
          <EatOutHeroSlider key={restaurant.name} restaurant={restaurant} />
        ))}
      </Slider>
    </>
  );
};

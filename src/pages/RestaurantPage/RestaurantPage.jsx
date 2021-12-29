import React, { useEffect } from "react";
import { useAPI } from "features/context/APIContext";
import { RestaurantBanner } from "components/RestaurantBanner";
import { useParams } from "react-router-dom";
import Location from "components/EatOutSection/EatOutRestaurantPage/InfoAndLocation/Location";
import { Information } from "components/EatOutSection/EatOutRestaurantPage/InfoAndLocation/Information";
import styles from "./restaurant-page.module.scss";
import { BreadCrumbs } from "components/Breadcrumbs/Breadcrumbs";

export const RestaurantPage = () => {
  const [contextData, fetchContextData] = useAPI();
  const { restaurantId } = useParams();

  const changeMatchedRoutes = (matchedRoutes) => {
    return [
      ...matchedRoutes,
      { route: { path: filteredRestaurant.id, name: filteredRestaurant.name } },
    ];
  };

  useEffect(() => {
    fetchContextData("restaurants", "userData");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRestaurant = contextData?.restaurants?.find(
    (restaurant) => restaurant.id === restaurantId
  );

  return filteredRestaurant ? (
    <>
      <BreadCrumbs changeMatchedRoutes={changeMatchedRoutes} />
      <RestaurantBanner data={filteredRestaurant} />
      <div className={styles.infoAndLocationItem}>
        <Information
          address={filteredRestaurant.location.address}
          website={filteredRestaurant.website}
          phone={filteredRestaurant.phone}
          openingHours={filteredRestaurant.openingHours}
        />
        <Location coordinates={filteredRestaurant.location.coordinates} />
      </div>
    </>
  ) : (
    <></>
  );
};

import React, { useEffect } from "react";
import { useAPI } from "features/context/APIContext";
import { RestaurantBanner } from "components/RestaurantBanner";
import { useParams } from "react-router-dom";
import Location from "components/EatOutSection/EatOutRestaurantPage/InfoAndLocation/Location";
import { Information } from "components/EatOutSection/EatOutRestaurantPage/InfoAndLocation/Information";
import styles from "./restaurant-page.module.scss";

export const RestaurantPage = () => {
  const [contextData, fetchContextData] = useAPI();
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchContextData("restaurants");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRestaurant = contextData?.restaurants?.find(
    (restaurant) => restaurant.id === restaurantId
  );

  return (
    filteredRestaurant && (
      <>
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
    )
  );
};

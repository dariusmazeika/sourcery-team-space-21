import React, { useEffect } from "react";
import { useAPI } from "features/context/APIContext";
import { RestaurantBanner } from "components/RestaurantBanner";
import { useParams } from "react-router-dom";

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
    <>
      {contextData && filteredRestaurant && (
        <RestaurantBanner data={filteredRestaurant} />
      )}
    </>
  );
};

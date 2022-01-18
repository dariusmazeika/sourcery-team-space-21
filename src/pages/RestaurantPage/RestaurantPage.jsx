import React, { useEffect } from "react";
import { useAPI } from "features/context/APIContext";
import { RestaurantBanner } from "components/RestaurantBanner";
import { ReviewsSection } from "components/EatOutSection";
import { useParams } from "react-router-dom";
import Location from "components/EatOutSection/EatOutRestaurantPage/InfoAndLocation/Location";
import { Information } from "components/EatOutSection/EatOutRestaurantPage/InfoAndLocation/Information";
import styles from "./restaurant-page.module.scss";
import { BreadCrumbs } from "components/Breadcrumbs/Breadcrumbs";
import { PageContainer } from "components/PageContainer/PageContainer";

export const RestaurantPage = () => {
  const [{ data }, getData, dispatch] = useAPI();
  const { restaurantId } = useParams();

  const changeMatchedRoutes = (matchedRoutes) => {
    return [
      ...matchedRoutes,
      { route: { path: filteredRestaurant.id, name: filteredRestaurant.name } },
    ];
  };

  useEffect(() => {
    getData("restaurants", "userData");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRestaurant = data?.restaurants?.find(
    (restaurant) => restaurant.id === restaurantId
  );

  return (
    <>
      {filteredRestaurant && (
        <>
          <PageContainer isFullWidth={true}>
            <PageContainer>
              <BreadCrumbs changeMatchedRoutes={changeMatchedRoutes} />
            </PageContainer>
            <RestaurantBanner data={filteredRestaurant} dispatch={dispatch} />
          </PageContainer>
          <PageContainer className={styles.restaurantPageSection}>
            <div className={styles.infoAndLocationItem}>
              <Information
                address={filteredRestaurant.location.address}
                website={filteredRestaurant.website}
                phone={filteredRestaurant.phone}
                openingHours={filteredRestaurant.openingHours}
              />
              <Location coordinates={filteredRestaurant.location.coordinates} />
            </div>
            <ReviewsSection reviews={filteredRestaurant.reviews} />
          </PageContainer>
        </>
      )}
    </>
  );
};

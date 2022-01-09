import React, { useEffect } from "react";
import { useAPI } from "features/context";
import { BreadCrumbs } from "components/Breadcrumbs";
import { HeroSliderSection } from "components/EatOutSection/HeroSliderSection/HeroSliderSection";
import { NewPlacesSection } from "components/EatOutSection/NewPlacesSection/NewPlacesSection";
import { PageContainer } from "components/PageContainer/PageContainer";
import { Spinner } from "components/Spinner/Spinner";

export const EatOutPage = () => {
  const [data, getData, isLoading] = useAPI();

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  return (
    <PageContainer>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <BreadCrumbs />
          <HeroSliderSection data={data} />
          <NewPlacesSection data={data} />
        </>
      )}
    </PageContainer>
  );
};

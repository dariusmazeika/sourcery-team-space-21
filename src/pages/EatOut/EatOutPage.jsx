import React, { useEffect } from "react";
import { useAPI } from "features/context";
import { BreadCrumbs } from "components/Breadcrumbs";
import { HeroSliderSection } from "components/EatOutSection/HeroSliderSection/HeroSliderSection";
import { NewPlacesSection } from "components/EatOutSection/NewPlacesSection/NewPlacesSection";
import { PageContainer } from "components/PageContainer/PageContainer";

export const EatOutPage = () => {
  const [data, getData] = useAPI();

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  return (
    <PageContainer>
      <BreadCrumbs />
      <HeroSliderSection data={data} />
      <NewPlacesSection data={data} />
    </PageContainer>
  );
};

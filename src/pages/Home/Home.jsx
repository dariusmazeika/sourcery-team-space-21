import React from "react";
import { MainLayout } from "components/MainLayout";
import { useRoutes } from "react-router-dom";
import { routes } from "pages/routes";

export const Home = () => {
  const RoutesElement = useRoutes(routes);

  return <MainLayout className="app">{RoutesElement}</MainLayout>;
};

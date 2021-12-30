import React from "react";
import { Outlet } from "react-router-dom";
import { MainLayout } from "components/MainLayout";

export const Home = () => {
  return (
    <MainLayout className="app">
      <Outlet />
    </MainLayout>
  );
};

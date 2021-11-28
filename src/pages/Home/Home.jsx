import React from "react";
import { MainLayout } from "components/MainLayout";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "pages/Dashboard";
import { ReservationsPage } from "pages/Reservations";
import { EatOutPage } from "pages/EatOut";

export const Home = () => {
  return (
    <MainLayout className="app">
      <Routes>
        <Route exact path="/" element={<DashboardPage />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/eat-out" element={<EatOutPage />} />
      </Routes>
    </MainLayout>
  );
};

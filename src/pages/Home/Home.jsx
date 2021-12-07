import React from "react";
import { MainLayout } from "components/MainLayout";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "pages/Dashboard";
import { ReservationsPage } from "pages/Reservations";
import { EatOutPage } from "pages/EatOut";
import { Books } from "pages/Books";
import { MeetingRooms } from "pages/MeetingRooms";
import { Devices } from "pages/Devices";
import { NotFound } from "pages/NotFound";

export const Home = () => {
  const breadCrumbs = {
    reservations: ["dashboard", "reservations"],
  };

  return (
    <MainLayout className="app">
      <Routes>
        <Route exact path="/" element={<DashboardPage />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route
          path="/reservations/meeting-rooms"
          index
          element={<MeetingRooms breadCrumbs={breadCrumbs.reservations} />}
        />
        <Route
          path="/reservations/books"
          index
          element={<Books breadCrumbs={breadCrumbs.reservations} />}
        />
        <Route
          path="/reservations/devices"
          index
          element={<Devices breadCrumbs={breadCrumbs.reservations} />}
        />
        <Route path="/eat-out" element={<EatOutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

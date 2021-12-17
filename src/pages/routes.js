import React from "react";
import { DashboardPage } from "./Dashboard";
import { ReservationsPage } from "./Reservations";
import { MeetingRooms } from "./MeetingRooms";
import { Books } from "./Books";
import { Devices } from "./Devices";
import { EatOutPage } from "./EatOut";
import { RestaurantPage } from "./RestaurantPage";
import { NotFound } from "./NotFound";

const reservationsBreadCrumbs = ["dashboard", "reservations"];
const eatOutBreadCrumbs = ["dashboard", "eat-out"];

export const routes = [
  { path: "/", element: <DashboardPage /> },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/reservations",
    element: <ReservationsPage />,
  },
  {
    path: "/reservations/meeting-rooms",
    name: [...reservationsBreadCrumbs, "meeting-rooms"],
    element: <MeetingRooms />,
  },
  {
    path: "/reservations/books",
    name: [...reservationsBreadCrumbs, "books"],
    element: <Books />,
  },
  {
    path: "/reservations/devices",
    name: [...reservationsBreadCrumbs, "devices"],
    element: <Devices />,
  },
  { path: "/eat-out", name: eatOutBreadCrumbs, element: <EatOutPage /> },
  { path: "/eat-out/:restaurantId", element: <RestaurantPage /> },
  { path: "/*", element: <NotFound /> },
];

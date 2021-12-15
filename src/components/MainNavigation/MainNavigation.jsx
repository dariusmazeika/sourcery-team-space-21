import React from "react";
import styles from "./main-navigation.module.scss";
import { MainNavigationItem } from "components/MainNavigation";

export const MainNavigation = () => {
  const navigationLinks = [
    { title: "Dashboard", iconId: "icon-location-home" },
    { title: "Reservations", iconId: "icon-location-bookmark" },
    { title: "Eat-Out", iconId: "icon-location-compass" },
  ];
  return (
    <nav>
      <ul className={styles.mainNavigationList}>
        {navigationLinks.map((navigationLink) => (
          <li
            className={styles.mainNavigationListItem}
            key={navigationLink.title}
          >
            <MainNavigationItem
              title={navigationLink.title}
              iconId={navigationLink.iconId}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

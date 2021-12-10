import React from "react";
import styles from "./main-navigation.module.scss";
import { MainNavigationItem } from "components/MainNavigation";

export const MainNavigation = () => {
  const navigationLinks = [
    { title: "Dashboard" },
    { title: "Reservations" },
    { title: "Eat-Out" },
  ];
  return (
    <nav>
      <ul className={styles.mainNavigationList}>
        {navigationLinks.map((navigationLink) => (
          <li
            className={styles.mainNavigationListItem}
            key={navigationLink.title}
          >
            <MainNavigationItem title={navigationLink.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

import React from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";

export const DashboardPage = () => {
  return (
    <section className={styles.dashboardSection}>
      <HelloWidget />
    </section>
  );
};

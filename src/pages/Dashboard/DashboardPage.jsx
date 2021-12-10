import React from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";
import { ReservationsWidget } from "components/reservationsWidget/ReservationsWidget";

export const DashboardPage = () => {
  return (
    <>
      <section className={styles.dashboardSection}>
        <HelloWidget />
      </section>
      <section>
        <ReservationsWidget />
      </section>
    </>
  );
};

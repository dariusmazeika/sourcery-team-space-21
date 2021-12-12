import React, { useEffect } from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";
import { ReservationsWidget } from "components/reservationsWidget/ReservationsWidget";
import { EatOutSection } from "components/EatOutSection/EatOutSection/EatOutSection";
import { useAPI } from "features/context/APIContext";

export const DashboardPage = () => {
  const [data, getData] = useAPI();

  //TODO: add useEffect dependencies
  useEffect(() => {
    getData("userData", "restaurants");
  }, []); // eslint-disable-line

  return (
    <>
      <section className={styles.dashboardSection}>
        <HelloWidget />
      </section>
      <section className={styles.dashboardSection}>
        <ReservationsWidget data={data} />
      </section>
      <section className={styles.dashboardSection}>
        <EatOutSection data={data} />
      </section>
    </>
  );
};

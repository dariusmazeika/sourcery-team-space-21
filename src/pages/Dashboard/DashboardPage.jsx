import React, { useEffect } from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";
import { ReservationsWidget } from "components/reservationsWidget/ReservationsWidget";
import { EatOutSection } from "components/EatOutSection/EatOutSection/EatOutSection";
import { useAPI } from "features/context/APIContext";
import { BirthdayCard } from "components/BirthdayCard/BirthdayCard";

export const DashboardPage = () => {
  const [data, getData] = useAPI();

  //TODO: add useEffect dependencies
  useEffect(() => {
    getData("userData", "restaurants", "stories");
  }, []); // eslint-disable-line

  return (
    data && (
      <>
        <section className={styles.dashboardSection}>
          <HelloWidget />
        </section>
        <section className={styles.dashboardSection}>
          <ReservationsWidget data={{ userData: data.userData }} />
        </section>
        <section className={styles.dashboardSection}>
          <EatOutSection data={data} />
        </section>
        <BirthdayCard data={data.stories} />
      </>
    )
  );
};

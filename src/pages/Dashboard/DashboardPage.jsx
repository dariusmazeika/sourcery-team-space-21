import React, { useEffect } from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";
import { ReservationsWidget } from "components/reservationsWidget/ReservationsWidget";
import { EatOutSection } from "components/EatOutSection/EatOutSection/EatOutSection";
import { useAPI } from "features/context/APIContext";
import { BirthdayCard } from "components/BirthdayCard/BirthdayCard";
import { PageContainer } from "components/PageContainer/PageContainer";

export const DashboardPage = () => {
  const [data, getData] = useAPI();

  //TODO: add useEffect dependencies
  useEffect(() => {
    getData("userData", "restaurants", "stories");
  }, []); // eslint-disable-line

  return (
    <PageContainer>
      <section className={styles.dashboardSection}>
        <HelloWidget />
      </section>
      <section className={styles.dashboardSection}>
        <ReservationsWidget data={{ userData: data.userData }} />
      </section>
      <section className={styles.dashboardSection}>
        <EatOutSection data={data} />
      </section>
      {data.stories && <BirthdayCard data={data.stories[0]} />}
    </PageContainer>
  );
};

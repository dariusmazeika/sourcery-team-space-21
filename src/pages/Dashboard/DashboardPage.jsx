import React, { useEffect } from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";
import { ReservationsWidget } from "components/reservationsWidget/ReservationsWidget";
import { EatOutSection } from "components/EatOutSection/EatOutSection/EatOutSection";
import { useAPI } from "features/context/APIContext";
import { PageContainer } from "components/PageContainer/PageContainer";
import { Spinner } from "components/Spinner/Spinner";

export const DashboardPage = () => {
  const [data, getData, dataIsLoading] = useAPI();

  useEffect(() => {
    getData("userData", "restaurants");
  }, []); // eslint-disable-line

  return (
    <PageContainer>
      {dataIsLoading && <Spinner />}
      {!dataIsLoading && (
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
        </>
      )}
    </PageContainer>
  );
};

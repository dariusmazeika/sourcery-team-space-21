import React, { useEffect } from "react";
import styles from "./DashboardPage.module.scss";
import { HelloWidget } from "components/HelloWidget/HelloWidget";
import { ReservationsWidget } from "components/reservationsWidget/ReservationsWidget";
import { EatOutSection } from "components/EatOutSection/EatOutSection/EatOutSection";
import { useAPI } from "features/context/APIContext";
import { PageContainer } from "components/PageContainer/PageContainer";
import { Spinner } from "components/Spinner/Spinner";

export const DashboardPage = () => {
  const [data, getData, isLoading, resetIsLoading] = useAPI();

  useEffect(() => {
    getData("userData", "restaurants");

    return function cleanup() {
      resetIsLoading();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      {isLoading && <Spinner />}
      {!isLoading && (
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

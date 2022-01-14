import React, { useEffect } from "react";

import {
  HelloWidget,
  ReservationsWidget,
  EatOutSection,
  PageContainer,
  WeatherWidget,
  StoriesPost,
} from "components";

import { useAPI } from "features/context/APIContext";

import styles from "./DashboardPage.module.scss";

export const DashboardPage = () => {
  const [data, getData] = useAPI();

  //TODO: add useEffect dependencies
  useEffect(() => {
    getData("userData", "restaurants", "weather", "stories");
  }, []); // eslint-disable-line

  const weekDayFull = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date().getDay());

  const weatherToday = data.weather?.find(
    (weatherObj) => weatherObj.weekDay === weekDayFull
  );

  return (
    <PageContainer>
      <section className={styles.dashboardSection}>
        <HelloWidget />
        {data.weather && <WeatherWidget data={weatherToday} />}
      </section>
      <section className={styles.dashboardSection}>
        <ReservationsWidget data={{ userData: data.userData }} />
      </section>
      <section className={styles.dashboardSection}>
        <EatOutSection data={data} />
      </section>
      <section>
        <h3>News and Stories</h3>
        <div className={styles.storiesPostContainer}>
          {data?.stories?.map((story) => (
            <StoriesPost data={story} key={story.id} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

import React from "react";
import styles from "./EatOutPage.module.scss";
import { useAPI } from "features/context/APIContext";
import { useEffect } from "react";
import { NewPlaces } from "components/NewPlaces/NewPlaces";

export const EatOutPage = () => {
  const [data, getData] = useAPI();

  useEffect(() => {
    getData("restaurants");
  }, []); // eslint-disable-line

  return (
    <div className={styles.eatOutSection}>
      <NewPlaces data={data} />
    </div>
  );
};

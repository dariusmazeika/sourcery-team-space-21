import { Button } from "components/button/Button";
import React from "react";
import styles from "./browse-card.module.scss";

export const BrowseCard = () => {
  return (
    <section className={styles.card}>
      <h3 className={styles.cardHeading}>
        View all your favourite lunch spots and more
      </h3>
      <Button size={"small"} kind={"primary"}>
        Browse List
      </Button>
    </section>
  );
};

export default BrowseCard;

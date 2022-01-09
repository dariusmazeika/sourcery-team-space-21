import React from "react";
import styles from "./spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.loader}>
      <p className={styles.isHidden}>Content is loading...</p>
    </div>
  );
};

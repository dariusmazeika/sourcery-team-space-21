import React from "react";
import styles from "./spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.loader}>
      <p className="elementIsHidden">Content is loading...</p>
    </div>
  );
};

import React from "react";
import PropTypes from "prop-types";

import { FavoriteButton } from "components/favoriteButton";
import styles from "./ActionBar.module.scss";

// TODO add StarComponent and CheckIn later when they are done

export const ActionBar = ({ checkIns }) => (
  <div className={styles.box}>
    <div className={styles.actionGroup}>
      <FavoriteButton />
    </div>
    <p className="caption">
      {checkIns > 0
        ? `${checkIns} people have already checked-in!`
        : "no one has checked-in yet!"}
    </p>
    <div className={styles.actionGroup}></div>
  </div>
);

ActionBar.propTypes = {
  checkIns: PropTypes.number,
};

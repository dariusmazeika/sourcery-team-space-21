import React from "react";
import PropTypes from "prop-types";
import styles from "./reservationsItem.module.scss";
import { Link } from "react-router-dom";

export const ReservationsItem = ({ item }) => {
  return (
    <Link to={item.path} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardTextBox}>
          <h3 className={styles.cardTextBoxTitle}>{item.title}</h3>
          <p className={styles.cardTextBoxSubtitle}>
            {item.numberReserved} reserved
          </p>
        </div>
        <img src={item.img} alt={item.alt} className={styles.cardImg} />
      </div>
    </Link>
  );
};

ReservationsItem.propTypes = {
  item: PropTypes.object.isRequired,
  path: PropTypes.string,
};

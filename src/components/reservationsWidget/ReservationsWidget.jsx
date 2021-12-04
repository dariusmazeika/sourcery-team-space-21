import React from "react";
import PropTypes from "prop-types";
import styles from "./reservationsWidget.module.scss";
import { ReservationsItem } from "components/reservationsWidget";

export const ReservationsWidget = (props) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapperHeader}>Reservations</h3>
      <div className={styles.wrapperItemsBox}>
        <ReservationsItem itemName={"rooms"} />
        <ReservationsItem itemName={"rooms"} />
        <ReservationsItem itemName={"rooms"} />
      </div>
    </div>
  );
};

ReservationsWidget.propTypes = { props: PropTypes.any };

import React from "react";
import PropTypes from "prop-types";
import styles from "./reservationItem.module.scss";
import bookImage from "assets/book.png";
import deviceImage from "assets/device.png";
import doorImage from "assets/door.png";

const items = {
  rooms: {
    title: "meeting rooms",
    img: doorImage,
    alt: "meeting rooms reservation",
  },
  devices: {
    title: "devices",
    img: deviceImage,
    alt: "device reservation",
  },
  books: {
    title: "books",
    img: bookImage,
    alt: "books reservation",
  },
};

export const ReservationItem = ({ itemName, numberReserved = 0 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTextBox}>
        <h3 className={styles.cardTextBoxTitle}>{items[itemName].title}</h3>
        <p className={styles.cardTextBoxSubtitle}>{numberReserved} reserved</p>
      </div>
      <img
        src={items[itemName].img}
        alt={items[itemName].alt}
        className={styles.cardImg}
      />
    </div>
  );
};

ReservationItem.propTypes = {
  itemName: PropTypes.oneOf(Object.keys(items)).isRequired,
  numberReserved: PropTypes.number,
};

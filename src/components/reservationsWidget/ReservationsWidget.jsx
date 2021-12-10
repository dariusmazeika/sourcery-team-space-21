import React from "react";
import PropTypes from "prop-types";
import styles from "./reservationsWidget.module.scss";
import bookImage from "assets/book.png";
import deviceImage from "assets/device.png";
import doorImage from "assets/door.png";
import { ReservationsItem } from "components/reservationsWidget";

const items = [
  {
    title: "Meeting rooms",
    img: doorImage,
    alt: "meeting rooms reservation",
    numberReserved: 0,
  },
  {
    title: "Devices",
    img: deviceImage,
    alt: "device reservation",
    numberReserved: 0,
  },
  {
    title: "Books",
    img: bookImage,
    alt: "books reservation",
    numberReserved: 0,
  },
];

export const ReservationsWidget = (props) => {
  return (
    <>
      <h3 className={styles.widgetHeader}>Reservations</h3>
      <ul className={styles.widgetListBox}>
        {items.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className={styles.widgetListBoxItem}
          >
            <ReservationsItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

ReservationsWidget.propTypes = { props: PropTypes.any };

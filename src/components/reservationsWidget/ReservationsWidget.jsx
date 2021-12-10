import React, { useEffect } from "react";
import { useAPI } from "features/context";
import PropTypes from "prop-types";
import styles from "./reservationsWidget.module.scss";
import bookImage from "assets/book.png";
import deviceImage from "assets/device.png";
import doorImage from "assets/door.png";
import { ReservationsItem } from "components/reservationsWidget";

const itemsConfig = [
  {
    initData: {
      title: "Meeting rooms",
      img: doorImage,
      alt: "meeting rooms reservation",
    },
    dataKey: "rooms",
  },
  {
    initData: {
      title: "Devices",
      img: deviceImage,
      alt: "device reservation",
    },
    dataKey: "devices",
  },
  {
    initData: {
      title: "Books",
      img: bookImage,
      alt: "books reservation",
    },
    dataKey: "books",
  },
];

export const ReservationsWidget = (props) => {
  const [data, getData] = useAPI();

  //TODO: add useEffect dependency when reservations function is implemented
  useEffect(() => {
    getData("userData");
  }, []); // eslint-disable-line

  const items = itemsConfig.map(({ initData, dataKey }) => {
    return {
      ...initData,
      numberReserved: data.userData
        ? data.userData[0].reservations[dataKey].length
        : 0,
    };
  });

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

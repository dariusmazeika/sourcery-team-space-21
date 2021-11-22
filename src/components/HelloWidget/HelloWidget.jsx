import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import styles from "components/HelloWidget/hello-widget.module.scss";

export const HelloWidget = ({ name = "Jonas" }) => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          .replace("AM", "")
          .replace("PM", "")
      );
    }, 1000);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>{clockState}</div>
        <div className={styles.text}>Good afternoon, {name}!</div>
      </div>
    </>
  );
};

HelloWidget.propTypes = {
  name: propTypes.string,
};

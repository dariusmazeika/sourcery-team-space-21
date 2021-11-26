import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import styles from "components/HelloWidget/hello-widget.module.scss";

export const HelloWidget = ({ username = "Jonas", partofday }) => {
  const [clockState, setClockState] = useState();

  const date = new Date();
  const curHr = date.getHours();
  if (curHr < 5 || curHr >= 21) {
    partofday = "evening";
  } else if (curHr < 12) {
    partofday = "morning";
  } else if (curHr < 17) {
    partofday = "afternoon";
  } else if (curHr < 21) {
    partofday = "evening";
  }

  function Time() {
    const date = new Date();
    setClockState(
      date.toLocaleTimeString(["en-GB"], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }

  useEffect(() => {
    Time();
    setInterval(() => {
      Time();
    }, 1000);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>{clockState}</div>
        <div className={styles.text}>
          Good {partofday}, {username}!
        </div>
      </div>
    </>
  );
};

HelloWidget.propTypes = {
  username: propTypes.string,
  partofday: propTypes.string,
};

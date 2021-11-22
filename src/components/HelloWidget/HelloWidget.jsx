import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import styles from "components/HelloWidget/hello-widget.module.scss";

// PartOfDay = {
//   MORNING: "morning",
//   AFTERNOON: "afternoon",
//   EVENING: "evening",
//   NIGHT: "night",
// };

export const HelloWidget = ({ name = "Jonas", partofday }) => {
  const [clockState, setClockState] = useState();

  const date = new Date();
  const curHr = date.getHours();
  if (curHr < 5 || curHr >= 21) {
    partofday = "night";
  } else if (curHr < 12) {
    partofday = "morning";
  } else if (curHr < 17) {
    partofday = "afternoon";
  } else if (curHr < 21) {
    partofday = "evening";
  }

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString(["en-GB"], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>{clockState}</div>
        <div className={styles.text}>
          Good {partofday}, {name}!
        </div>
      </div>
    </>
  );
};

HelloWidget.propTypes = {
  name: propTypes.string,
  partofday: propTypes.string,
};

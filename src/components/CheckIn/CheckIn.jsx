import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import SvgIconCheckInPerson from "components/icon/library/IconCheckInPerson";

import styles from "./check-in.module.scss";

export const CheckIn = ({ count = 0 }) => {
  return (
    <div className={styles.wrapper}>
      <SvgIconCheckInPerson />
      <div className={cx(styles.count, styles.caption)}>{count}</div>
    </div>
  );
};

CheckIn.propTypes = {
  count: PropTypes.number,
};

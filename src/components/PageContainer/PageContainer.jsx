import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./pageContainer.module.scss";

export const PageContainer = ({ children, isFullWidth = false }) => {
  return (
    <div
      className={cx(isFullWidth ? styles.containerFullWidth : styles.container)}
    >
      {children}
    </div>
  );
};

PageContainer.propTypes = {
  isFullWidth: PropTypes.bool,
  children: PropTypes.any,
};

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./main-navigation-item.module.scss";

export const MainNavigationItem = ({ title }) => {
  return (
    <button type="button" className={cx(styles.navigationButton, "heading4")}>
      {title}
    </button>
  );
};

MainNavigationItem.propTypes = {
  title: PropTypes.string,
};

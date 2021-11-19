import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./main-navigation-item.module.scss";

export const MainNavigationItem = ({ title }) => {
  return (
    <Link to={title}>
      <button type="button" className={cx(styles.navigationButton, "heading4")}>
        {title}
      </button>
    </Link>
  );
};

MainNavigationItem.propTypes = {
  title: PropTypes.string,
};

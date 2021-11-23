import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./main-navigation-item.module.scss";

export const MainNavigationItem = ({ title }) => {
  const path = title.toLowerCase();

  return (
    <>
      <Link to={path} className={cx(styles.navigationLink, "heading4")}>
        {title}
      </Link>
    </>
  );
};

MainNavigationItem.propTypes = {
  title: PropTypes.string,
};

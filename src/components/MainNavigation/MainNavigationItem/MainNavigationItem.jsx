import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./main-navigation-item.module.scss";
import { Icon } from "components/iconSprite/Icon";

export const MainNavigationItem = ({ title }) => {
  const path = title.toLowerCase();

  return (
    <>
      <Link to={path} className={cx(styles.navigationLink, "heading4")}>
        <div className={styles.navigationLinkIconBox}>
          {title === "Dashboard" && (
            <Icon name="icon-location-home" size="large" />
          )}
          {title === "Reservations" && (
            <Icon name="icon-location-bookmark" size="large" />
          )}
          {title === "Eat-Out" && (
            <Icon name="icon-location-compass" size="large" />
          )}
        </div>
        {title}
      </Link>
    </>
  );
};

MainNavigationItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

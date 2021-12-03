import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./main-navigation-item.module.scss";
import { IconLocationCompass } from "components/icon/library";
import { IconLocationHome } from "components/icon/library";
import { IconBookmark } from "components/icon/library";

export const MainNavigationItem = ({ title }) => {
  const path = title.toLowerCase();

  return (
    <>
      <Link to={path} className={cx(styles.navigationLink, "heading4")}>
        <div className={styles.navigationLinkIconBox}>
          {title === "Dashboard" && (
            <IconLocationHome currentColor={"#fff"} size={"2.4rem"} />
          )}
          {title === "Reservations" && (
            <IconBookmark currentColor={"#fff"} size={"2.4rem"} />
          )}
          {title === "Eat-Out" && (
            <IconLocationCompass currentColor={"#fff"} size={"2.4rem"} />
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

import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./bread-crumbs.module.scss";

export const BreadCrumbs = ({ breadCrumbs }) => {
  const history = useLocation();
  const lastCrumbName = history.pathname.split("/").pop();
  return (
    <nav aria-label="navigation" className={styles.breadCrumbsNavigation}>
      <ul className={styles.breadCrumbsNavigationList}>
        {breadCrumbs.map((breadcrumb, index) => (
          <li className={styles.breadCrumbsNavigationListItem} key={breadcrumb}>
            <Link
              to={`/${breadcrumb}`}
              className={styles.breadCrumbsNavigationLinks}
              key={breadcrumb}
            >
              {breadcrumb}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={history.pathname}
            className={cx(
              styles.breadCrumbsNavigationLinks,
              styles.breadCrumbsNavigationLinksActive
            )}
            key={lastCrumbName}
          >
            {lastCrumbName}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  breadCrumbs: PropTypes.array,
};

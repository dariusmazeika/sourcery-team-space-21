import React from "react";
import styles from "./bread-crumbs.module.scss";
import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
  const history = useLocation();
  const breadCrumbs = history.pathname.split("/").slice(1);
  return (
    <nav aria-label="navigation" className={styles.breadCrumbsNavigation}>
      <ul className={styles.breadCrumbsNavigationList}>
        {breadCrumbs.map((breadcrumb) => (
          <li className={styles.breadCrumbsNavigationListItem} key={breadcrumb}>
            <Link
              to={breadcrumb}
              className={styles.breadCrumbsNavigationLinks}
              key={breadcrumb}
            >
              {breadcrumb}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

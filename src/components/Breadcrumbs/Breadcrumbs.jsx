import React from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import styles from "./bread-crumbs.module.scss";
import { routes } from "pages/routes";

export const BreadCrumbs = () => {
  const location = useLocation();
  const routeMatches = matchRoutes(routes, location);
  const breadCrumbs = routeMatches[0].route.name;

  return (
    <nav aria-label="navigation" className={styles.breadCrumbsNavigation}>
      <ul className={styles.breadCrumbsNavigationList}>
        {breadCrumbs.map((breadcrumb) => (
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
      </ul>
    </nav>
  );
};

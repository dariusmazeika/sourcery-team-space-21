import React from "react";
import styles from "./_styles.module.scss";
import PropTypes from "prop-types";
import logoDark from "../../assets/logo-dark.png";

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <div className={styles.navigationMeta}>
          <div className={styles.navigationMetaLogo}>
            <img src={logoDark} alt="logotype" />
          </div>
          <div className={styles.navigationMetaTeam}>
            <div>Team</div>
            <div>Inbif</div>
          </div>
        </div>
        {/*<nav>{ navigation links }</nav>*/}
        {/*<div>{ bell icon & user menu }</div>*/}
      </header>

      <main>{children}</main>

      <footer>
        <div>COPYRIGHT &copy; 2021 DEVBRIDGE</div>
      </footer>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

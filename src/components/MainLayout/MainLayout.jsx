import React from "react";
import styles from "./_styles.module.scss";
import PropTypes from "prop-types";
import logoDark from "../../assets/logo-dark.png";

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <header className={styles.header}>
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

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerText}>copyright &copy; 2021 devbridge</div>
      </footer>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

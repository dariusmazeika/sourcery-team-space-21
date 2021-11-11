import React from "react";
import styles from "./_styles.module.scss";
import PropTypes from "prop-types";
import logoDarkOutline from "assets/logo-dark-outline.png";

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigationMeta}>
          <div className={styles.navigationMetaLogo}>
            <img
              src={logoDarkOutline}
              alt="logotype"
              className={styles.navigationMetaLogoImg}
            />
          </div>
          <div className={`${styles.navigationMetaTeam} heading5`}>
            <div>Team Inbif</div>
          </div>
        </div>
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

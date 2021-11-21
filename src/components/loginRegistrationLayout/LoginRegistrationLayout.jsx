import React from "react";
import PropTypes from "prop-types";
import styles from "./loginRegistrationLayout.module.scss";
import logoGradientBackground from "assets/logo-gradient-background.png";

const LoginRegistrationLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.mainBox}>
        <div className={styles.logo}>
          <img
            src={logoGradientBackground}
            alt="inbif team logotype"
            className={styles.logoImg}
          />
          <div className={styles.logoText}>Team Inbif</div>
        </div>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </div>
  );
};

LoginRegistrationLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginRegistrationLayout;

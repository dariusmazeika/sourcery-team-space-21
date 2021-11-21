import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./loginRegistrationLayout.module.scss";
import logoGradientBackground from "assets/logo-gradient-background.png";

const LoginRegistrationLayout = ({ formTitle, formSubtitle, children }) => {
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
        <div className={styles.formContainer}>
          <div className={styles.formContainerHeader}>
            <h2 className={cx(styles.formContainerHeaderTitle, "h2-alt")}>
              {formTitle}
            </h2>
            <p className={styles.formContainerHeaderSubtitle}>{formSubtitle}</p>
          </div>
          <div className={styles.formContainerBody}>{children}</div>
          <div className={styles.formContainerActionsBlock}></div>
        </div>
      </div>
    </div>
  );
};

LoginRegistrationLayout.propTypes = {
  formTitle: PropTypes.string,
  formSubtitle: PropTypes.string,
  children: PropTypes.node,
};

export default LoginRegistrationLayout;

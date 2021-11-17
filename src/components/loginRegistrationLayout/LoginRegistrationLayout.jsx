import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./loginRegistrationLayout.module.scss";

const LoginRegistrationLayout = ({ formTitle, formSubtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h2 className={cx(styles.containerHeaderTitle, "h2-alt")}>
          {formTitle}
        </h2>
        <p className={styles.containerHeaderSubtitle}>{formSubtitle}</p>
      </div>
      <div className={styles.containerBody}></div>
      <div className={styles.containerFooter}></div>
    </div>
  );
};

LoginRegistrationLayout.propTypes = {
  formTitle: PropTypes.string,
  formSubtitle: PropTypes.string,
};

export default LoginRegistrationLayout;

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./formHeader.module.scss";

const FormHeader = ({ title, subtitle }) => {
  return (
    <div>
      <div className={styles.headerBox}>
        <h2 className={cx(styles.headerBoxTitle, "h2-alt")}>{title}</h2>
        <p className={styles.headerBoxSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default FormHeader;

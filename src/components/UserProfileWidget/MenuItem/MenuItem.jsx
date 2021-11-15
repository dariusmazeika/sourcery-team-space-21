import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./_menu-item.module.scss";

export const MenuItem = ({ title, stylesClass }) => {
  return (
    <button
      type="button"
      className={cx(styles.button, "caption", {
        [styles.buttonTop]: stylesClass === "topButton",
        [styles.buttonBottom]: stylesClass === "bottomButton",
      })}
    >
      {title}
    </button>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  stylesClass: PropTypes.string.isRequired,
};

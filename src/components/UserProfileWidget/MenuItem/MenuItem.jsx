import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./menu-item.module.scss";

export const MenuItem = ({ title, stylesClass, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
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
  onClick: PropTypes.func,
};

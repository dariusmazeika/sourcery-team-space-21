import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.scss";

const Type = {
  PRIMARY: "primary",
  TEXT: "text",
  ACTION: "action",
};

const Size = {
  LARGE: "large",
};

const Color = {
  SECONDARY: "secondary",
  DUOCOLOR: "reverse",
};

export const Button1 = ({ children, type, size, color }) => {
  return (
    <button
      className={cx(styles.btn, {
        [styles.large]: size === Size.LARGE,
        [styles.primary]: type === Type.PRIMARY,
        [styles.text]: type === Type.TEXT,
        [styles.action]: type === Type.ACTION,
        [styles.secondary]: color === Color.SECONDARY,
        [styles.reverse]: color === Color.DUOCOLOR,
      })}
    >
      {children}
    </button>
  );
};

Button1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(Object.values(Type)).isRequired,
  size: PropTypes.oneOf(Object.values(Size)),
  color: PropTypes.oneOf(Object.values(Color)),
};

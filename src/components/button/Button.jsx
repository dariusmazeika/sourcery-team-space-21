import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.scss";

const Kind = {
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

export const Button = ({ children, kind, size, color }) => {
  return (
    <button
      type="button"
      className={cx(styles.btn, {
        [styles.primary]: kind === Kind.PRIMARY,
        [styles.text]: kind === Kind.TEXT,
        [styles.action]: kind === Kind.ACTION,
        [styles.secondary]: color === Color.SECONDARY,
        [styles.reverse]: color === Color.DUOCOLOR,
        [styles.large]: size === Size.LARGE,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  kind: PropTypes.oneOf(Object.values(Kind)).isRequired,
  size: PropTypes.oneOf(Object.values(Size)),
  color: PropTypes.oneOf(Object.values(Color)),
};

Button.defaultProps = {
  children: "DEFAULT",
  kind: "primary",
};

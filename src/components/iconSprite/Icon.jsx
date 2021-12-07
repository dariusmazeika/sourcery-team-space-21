import React from "react";
import icons from "./icons.svg";
import PropTypes from "prop-types";
import styles from "./icon.module.scss";

export const Icon = ({
  name = "icon-check-in-person",
  color = "#fff",
  size = "2.4rem",
  fillColor = "#fff",
  strokeWidth = "0",
}) => {
  return (
    <svg
      className={styles.stroke}
      width={size}
      height={size}
      stroke={color}
      fill={fillColor}
      strokeWidth={strokeWidth}
    >
      <use href={`${icons}#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
};

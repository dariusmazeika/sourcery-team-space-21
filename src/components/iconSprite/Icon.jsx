import React from "react";
import icons from "./icons.svg";
import PropTypes from "prop-types";

export const Icon = ({
  name = "icon-action-circle-pause",
  color = "#fff",
  width = "2.4rem",
  height = "2.4rem",
  fillColor = "none",
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={width}
      height={height}
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
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
};

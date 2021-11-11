import React from "react";
import buttonSccs from "./button.module.scss";
import PropTypes from "prop-types";

export const Button = ({ size, text }) => {
  return (
    <button
      className={
        size === "Medium"
          ? `${buttonSccs.Medium} ${buttonSccs.btn}`
          : size === "Large"
          ? `${buttonSccs.Large} ${buttonSccs.btn}`
          : " "
      }
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(["Medium", "Large"]).isRequired,
};

Button.defaultProps = {
  text: "DEFAULT",
  size: "Medium",
};

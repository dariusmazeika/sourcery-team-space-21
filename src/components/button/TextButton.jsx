import React from "react";
import textButtonScss from "./text-button.module.scss";
import PropTypes from "prop-types";

export const TextButton = ({ children }) => {
  return <button className={textButtonScss.txtBtn}>{children}</button>;
};

TextButton.propTypes = {
  children: PropTypes.any,
};

TextButton.defaultProps = {
  children: "DEFAULT",
};

export default TextButton;

import React from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";

//props {id, type, placeHolder, labelText, isError, isLocked}

const Input = (props) => {
  return (
    <div className={styles.container}>
      <label>{props.labelText}</label>
      <input
        className={styles.field}
        type={props.type}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeHolder: "Placeholder",
  labelText: "LABEL",
  isError: false,
  isLocked: false,
};
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  isLocked: PropTypes.bool,
};

export default Input;

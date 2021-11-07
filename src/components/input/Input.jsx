import React from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";

const Input = (props) => {
  //maybe I should de-structure props
  return (
    <div className={styles.container}>
      <label
        className={props.disabled ? styles.labelDisabled : styles.label} //check if field disabled
        htmlFor={props.id}
      >
        {props.labelText}
      </label>
      <input
        id={props.id}
        className={props.isError ? styles.fieldError : styles.field} // check if error
        type={props.type}
        placeholder={props.disabled ? "Disabled" : props.placeHolder} // if disabled change placeholder
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
      />
      {props.isError ? (
        <div className={styles.errorMessage}>{props.errorMsg}</div>
      ) : (
        ""
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeHolder: "Placeholder",
  labelText: "LABEL",
  isError: false,
  disabled: false,
  errorMsg: "error",
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorMsg: PropTypes.string,
};

export default Input;

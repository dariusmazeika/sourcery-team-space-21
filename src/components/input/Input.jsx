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
        placeholder={props.disabled ? "Disabled" : props.value} // if disabled change placeholder
        disabled={props.disabled}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  value: "Placeholder", //probably should change value --> placeHolder
  labelText: "LABEL", //and keep value for value prop ?
  isError: false,
  disabled: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;

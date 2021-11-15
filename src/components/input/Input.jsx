import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./input.module.scss";

const Input = ({
  id,
  type,
  placeHolder,
  labelText,
  isError,
  disabled,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className={styles.container}>
      <label
        className={
          disabled ? cx(styles.label, styles.labelIsDisabled) : styles.label
        }
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        id={id}
        className={isError ? cx(styles.field, styles.fieldError) : styles.field}
        type={type}
        placeholder={placeHolder}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      {isError && !disabled && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeHolder: "placeholder",
  labelText: "label",
  isError: false,
  disabled: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]),
  placeHolder: PropTypes.string,
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default Input;

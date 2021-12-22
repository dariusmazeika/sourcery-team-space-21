import React from "react";
import PropTypes from "prop-types";
import styles from "./slider-navigation-button.module.scss";
import cx from "classnames";
import { Icon } from "components/iconSprite/Icon";

export const SliderNavigationButtons = ({ type = "button", next, prev }) => {
  return (
    <div>
      <button
        type={type}
        className={cx(styles.btn, styles.left)}
        onClick={prev}
      >
        <Icon name="icon-slider-direction-right" size="large" />
      </button>
      <button type={type} className={styles.btn} onClick={next}>
        <Icon name="icon-slider-direction-right" size="large" />
      </button>
    </div>
  );
};

SliderNavigationButtons.propTypes = {
  type: PropTypes.oneOf(["button"]),
  next: PropTypes.func,
  prev: PropTypes.func,
};

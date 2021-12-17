import React from "react";
import PropTypes from "prop-types";
import styles from "./slider-navigation-button.module.scss";
import cx from "classnames";
import { Icon } from "components/iconSprite/Icon";

const Direction = {
  LEFT: "left",
};

export const SliderNavigationButton = ({ type = "button", direction }) => {
  return (
    <button
      type={type}
      className={cx(styles.btn, {
        [styles.left]: direction === Direction.LEFT,
      })}
    >
      <Icon name="icon-slider-direction-right" size="large" />
    </button>
  );
};

SliderNavigationButton.propTypes = {
  type: PropTypes.oneOf(["button"]),
  direction: PropTypes.oneOf(["", "left"]),
};

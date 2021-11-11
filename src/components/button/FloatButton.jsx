import React from "react";
import floatButtonScss from "./float-button-x.module.scss";
import PropTypes from "prop-types";

export const FloatButtonX = ({ color }) => {
  return (
    <button
      className={
        color === "Black"
          ? `${floatButtonScss.floatBtnX} ${floatButtonScss.Black}`
          : color === "Grey"
          ? `${floatButtonScss.floatBtnX} ${floatButtonScss.Grey}`
          : color === "LightGrey"
          ? `${floatButtonScss.floatBtnX} ${floatButtonScss.LightGrey}`
          : " "
      }
    >
      X
    </button>
  );
};

FloatButtonX.propTypes = {
  color: PropTypes.oneOf(["Black", "Grey", "LightGrey"]).isRequired,
};

FloatButtonX.defaultProps = {
  color: "Black",
};

export const FloatButton = ({ color }) => {
  return (
    <button
      className={
        color === "Black"
          ? `${floatButtonScss.floatBtn} ${floatButtonScss.Black}`
          : color === "Grey"
          ? `${floatButtonScss.floatBtn} ${floatButtonScss.Grey}`
          : color === "LightGrey"
          ? `${floatButtonScss.floatBtn} ${floatButtonScss.LightGrey}`
          : " "
      }
    ></button>
  );
};

FloatButton.propTypes = {
  color: PropTypes.oneOf(["Black", "Grey", "LightGrey"]).isRequired,
};

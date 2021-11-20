import React from "react";
import PropTypes from "react";

export const DashboardLayout = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

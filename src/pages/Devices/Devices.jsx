import React from "react";
import PropTypes from "prop-types";
import { BreadCrumbs } from "../../components/Breadcrumbs";

export const Devices = ({ breadCrumbs }) => {
  return <BreadCrumbs breadCrumbs={breadCrumbs} />;
};

Devices.propTypes = {
  breadCrumbs: PropTypes.array,
};

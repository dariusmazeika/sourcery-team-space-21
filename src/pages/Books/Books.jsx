import React from "react";
import { BreadCrumbs } from "components/Breadcrumbs";
import PropTypes from "prop-types";

export const Books = ({ breadCrumbs }) => {
  return <BreadCrumbs breadCrumbs={breadCrumbs} />;
};

Books.propTypes = {
  breadCrumbs: PropTypes.array,
};

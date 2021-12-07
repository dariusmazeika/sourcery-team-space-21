import React from "react";
import PropTypes from "prop-types";
import { BreadCrumbs } from "components/Breadcrumbs";

export const MeetingRooms = ({ breadCrumbs }) => {
  return <BreadCrumbs breadCrumbs={breadCrumbs} />;
};

MeetingRooms.propTypes = {
  breadCrumbs: PropTypes.array,
};

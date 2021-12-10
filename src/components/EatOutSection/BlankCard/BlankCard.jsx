import React from "react";
import styles from "./blank-card.module.scss";
import PropTypes from "prop-types";

export const BlankCard = ({ children }) => {
  return <section className={styles.card}>{children}</section>;
};

BlankCard.propTypes = {
  children: PropTypes.node,
};

export default BlankCard;

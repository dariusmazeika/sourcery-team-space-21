import React from "react";
import styles from "./blank-card.module.scss";
import PropTypes from "prop-types";

export const BlankCard = ({ cardContent }) => {
  return <section className={styles.card}>{cardContent}</section>;
};

BlankCard.propTypes = {
  cardContent: PropTypes.node,
};

export default BlankCard;

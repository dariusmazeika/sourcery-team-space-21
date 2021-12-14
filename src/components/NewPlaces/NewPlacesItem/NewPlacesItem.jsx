import React from "react";
import PropTypes from "prop-types";
import styles from "./new-places-item.module.scss";

export const NewPlacesItem = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.raiting}></div>
      <div className={styles.cardTopTextWrapper}>
        {item.categories.map((category, i) => (
          <p key={`${category}-${i}`} className={styles.topText}>
            {category}
          </p>
        ))}
      </div>
      <h3>{item.name}</h3>
    </div>
  );
};

NewPlacesItem.propTypes = {
  item: PropTypes.object.isRequired,
};

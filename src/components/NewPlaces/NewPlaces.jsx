import React from "react";
import PropTypes from "prop-types";
import { NewPlacesItem } from "./NewPlacesItem/NewPlacesItem";
import styles from "./new-places.module.scss";

export const NewPlaces = ({ data }) => {
  const restaurants = data.restaurants;

  return (
    <div className={styles.listBox}>
      {restaurants?.map((item, i) => (
        <NewPlacesItem key={`${item.name}-${i}`} item={item} />
      ))}
    </div>
  );
};

NewPlaces.propTypes = { data: PropTypes.object, name: PropTypes.string };

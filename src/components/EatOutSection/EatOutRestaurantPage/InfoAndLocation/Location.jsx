import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./location.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

function Location({ coordinates }) {
  return (
    <div className={styles.locationContainer}>
      <h2 className={cx(styles.locationContainerHeader, "heading2-alt")}>
        Location
      </h2>
      <LoadScript googleMapsApiKey="AIzaSyD1nocQYWn8zgzb_GZig6NRZ_CAVomFCfM">
        <GoogleMap
          mapContainerClassName={styles.locationContainerMap}
          center={coordinates}
          zoom={15}
        >
          {<Marker position={coordinates} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Location);

Location.propTypes = {
  coordinates: PropTypes.object,
};

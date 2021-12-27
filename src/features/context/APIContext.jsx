import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import fetchData from "features/data/fetchData";
import {
  addLikedRestaurants,
  addRestaurantRatings,
} from "features/data/restaurantDataPreProcessing";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});

  function fetchDataToState() {
    const args = Array.from(arguments);
    fetchData(args)
      .then((data) => addRestaurantRatings(data))
      .then((data) => addLikedRestaurants(data))
      .then((data) => setApiData({ ...apiData, ...data }));
  }

  return (
    <APIContext.Provider value={[apiData, fetchDataToState]}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

APIContextProvider.propTypes = {
  children: PropTypes.node,
};

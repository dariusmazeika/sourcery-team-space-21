import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import fetchData from "features/data/fetchData";
import {
  addLikedRestaurants,
  addRestaurantRatings,
} from "features/data/restaurantDataPreProcessing";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  let [apiData, setApiData] = useState({});

  function fetchDataToState() {
    const args = Array.from(arguments);
    fetchData(args)
      .then((data) => addRestaurantRatings(data))
      .then((data) => addLikedRestaurants(data))
      .then((data) => setApiData({ ...apiData, ...data }));
  }

  const updateComment = (data, id) => {
    let updatedStory = apiData.stories.find((story) => story.id === id);
    updatedStory.comments.unshift(data);

    setApiData({ ...apiData, stories: apiData.stories });
  };

  return (
    <APIContext.Provider value={[apiData, fetchDataToState, updateComment]}>
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

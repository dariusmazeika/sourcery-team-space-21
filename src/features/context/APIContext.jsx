import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import fetchData from "features/data/fetchData";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const resetIsLoading = () => setIsLoading(true);

  function fetchDataToState() {
    const args = Array.from(arguments);
    setIsLoading(true);
    setHasError(false);

    fetchData(args).then((data) => {
      setApiData({ ...apiData, ...data.data });
      setHasError(data.hasError);
      setTimeout(() => setIsLoading(false), 500);
    });
  }

  const updateComment = (data, id) => {
    let updatedStory = apiData.stories.find((story) => story.id === id);
    updatedStory.comments.unshift(data);

    setApiData({ ...apiData, stories: apiData.stories });
  };

  return (
    <APIContext.Provider
      value={[
        apiData,
        fetchDataToState,
        updateComment,
        isLoading,
        resetIsLoading,
        hasError,
      ]}
    >
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

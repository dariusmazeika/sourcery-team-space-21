import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import fetchData from "features/data/fetchData";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  function fetchDataToState() {
    const args = Array.from(arguments);
    setIsLoading(true);
    setHasError(false);

    fetchData(args).then((data) => {
      setApiData({ ...apiData, ...data.data });
      setHasError(data.hasError);
      setTimeout(() => setIsLoading(false), 100);
    });
  }

  const updateComment = (comment, id) => {
    const stories = [...apiData.stories];
    const updatedStory = stories.find((story) => story.id === id);
    updatedStory.comments.unshift(comment);

    setApiData({ ...apiData, stories: [...stories] });
  };

  return (
    <APIContext.Provider
      value={[apiData, fetchDataToState, updateComment, isLoading, hasError]}
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

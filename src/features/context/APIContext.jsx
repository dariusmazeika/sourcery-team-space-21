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
      setIsLoading(false);
    });
  }

  return (
    <APIContext.Provider
      value={[apiData, fetchDataToState, isLoading, hasError]}
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

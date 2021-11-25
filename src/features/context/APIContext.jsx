import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import fetchData from "features/fetchData";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});

  async function fetchDataToState() {
    const args = Array.from(arguments);
    const data = await fetchData(args);
    setApiData(data);
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
  children: PropTypes.element,
};

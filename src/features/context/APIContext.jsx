import React, { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";
import fetchData from "features/fetchData";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setApiData(data);
    }
    loadData();
  }, []);

  return <APIContext.Provider value={apiData}>{children}</APIContext.Provider>;
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

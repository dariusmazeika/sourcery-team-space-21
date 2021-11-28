import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({
  userData: {
    id: "",
    isLoggedIn: false,
    userName: "",
    email: "",
    userImage: "",
    location: "",
  },
  logInUser: () => {},
  logOutUser: () => {},
});

export const UserContextProvider = (props) => {
  const defaultUserData = {
    id: "",
    isLoggedIn: false,
    userName: "",
    email: "",
    userImage: "",
    location: "",
  };

  const [userData, setUserData] = useState(defaultUserData);
  const [setIsLoggedIn] = useState(userData.isLoggedIn);

  const logInUser = (data) => {
    const newUserData = data[0];
    setUserData((prevData) => {
      return { ...prevData, ...newUserData, isLoggedIn: true };
    });
    setIsLoggedIn(true);
  };

  const logOutUser = () => {
    setUserData({});
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ userData, logInUser, logOutUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

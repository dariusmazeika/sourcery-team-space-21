import React, { useContext, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { APIContextProvider } from "features/context/APIContext";
import { UserContext } from "features/context";
import { routes, loginRoutes } from "pages/routes";

function App() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const appRoutesElement = useRoutes(routes);
  const loginRoutesElement = useRoutes(loginRoutes);

  useEffect(() => {
    if (!userData.isLoggedIn) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.isLoggedIn]);

  return (
    <APIContextProvider>
      {userData.isLoggedIn ? appRoutesElement : loginRoutesElement}
    </APIContextProvider>
  );
}

export default App;

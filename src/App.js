import React, { useContext, useEffect } from "react";
import { useNavigate, useRoutes, Routes, Route } from "react-router-dom";
import { APIContextProvider } from "features/context/APIContext";
import { UserContext } from "features/context";
import { routes } from "pages/routes";
import { LogIn } from "pages/LogIn";
import { Register } from "pages/Register";

function App() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const appRoutesElement = useRoutes(routes);

  useEffect(() => {
    if (!userData.isLoggedIn) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.isLoggedIn]);

  return (
    <APIContextProvider>
      {userData.isLoggedIn ? (
        appRoutesElement
      ) : (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </APIContextProvider>
  );
}

export default App;

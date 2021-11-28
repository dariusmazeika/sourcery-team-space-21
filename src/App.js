import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { APIContextProvider } from "features/context/APIContext";
import { UserContext } from "features/context";
import { Home } from "pages/Home";
import { LogIn } from "pages/LogIn";
import { Register } from "pages/Register";

function App() {
  const { userData } = useContext(UserContext);

  return (
    <APIContextProvider>
      {userData.isLoggedIn && <Home />}
      {!userData.isLoggedIn && (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </APIContextProvider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "components/MainLayout";
import { DashboardPage } from "pages/Dashboard";
import { ReservationsPage } from "pages/Reservations";
import { EatOutPage } from "pages/EatOut";
import fetchData from "features/fetchData";

export const Context = React.createContext();

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setApiData(data);
    }
    loadData();
  }, []);

  return (
    <Router>
      <Context.Provider value={apiData}>
        <MainLayout className="app">
          <Routes>
            <Route exact path="/" element={<DashboardPage />}>
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/eat-out" element={<EatOutPage />} />
          </Routes>
        </MainLayout>
      </Context.Provider>
    </Router>
  );
}

export default App;

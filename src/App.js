import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "components/MainLayout";
import { DashboardPage } from "pages/Dashboard";
import { ReservationsPage } from "pages/Reservations";
import { EatOutPage } from "pages/EatOut";
import { APIContextProvider } from "features/context/APIContext";

function App() {
  return (
    <Router>
      <APIContextProvider>
        <MainLayout className="app">
          <Routes>
            <Route exact path="/" element={<DashboardPage />}>
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/eat-out" element={<EatOutPage />} />
          </Routes>
        </MainLayout>
      </APIContextProvider>
    </Router>
  );
}

export default App;

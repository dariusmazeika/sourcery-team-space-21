import React from "react";
import { MainLayout } from "components/MainLayout";
import { HelloWidget } from "components/HelloWidget/HelloWidget";

function App() {
  return (
    <MainLayout className="app">
      <HelloWidget></HelloWidget>
      {}
    </MainLayout>
  );
}

export default App;

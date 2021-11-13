import React from "react";
import { MainLayout } from "components/MainLayout";
import { Button } from "components/button";

function App() {
  return (
    <MainLayout className="app">
      <Button type="action" color="reverse">
        X
      </Button>
      {}
    </MainLayout>
  );
}

export default App;

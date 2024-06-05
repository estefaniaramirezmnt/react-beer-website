import React, { Suspense } from "react";
import Header from "./components/Header";
import { ApiProvider } from "./components/ApiContext";
import BeerList from "./components/BeerList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ApiProvider>
          <BeerList />
        </ApiProvider>
      </Suspense>
    </div>
  );
}

export default App;

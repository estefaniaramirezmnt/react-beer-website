import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import BeerList from "./components/BeerList";
import Footer from "./components/Footer";
import { ApiProvider } from "./components/ApiContext";
import "./App.css";

const BeerList = lazy(() => import("./components/BeerList"));
const FindYourBeer = lazy(() => import("./components/FindYourBeer"));

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/beerlist"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ApiProvider>
                    <BeerList />
                  </ApiProvider>
                </Suspense>
              }
            />
            <Route
              path="/findyourbeer"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ApiProvider>
                    <FindYourBeer />
                  </ApiProvider>
                </Suspense>
              }
            />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

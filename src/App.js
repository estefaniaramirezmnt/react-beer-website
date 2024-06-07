import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BeerList from "./components/BeerList";
import FindYourBeer from "./components/FindYourBeer";
import Footer from "./components/Footer";
import { ApiProvider } from "./components/ApiContext";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        <BrowserRouter>
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
            <Route path="/findyourbeer" element={<FindYourBeer />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

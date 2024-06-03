import React, { Suspense } from "react";
import Header from "./components/Header";
import fetchData from "./components/FetchData";

import "./App.css";

const apiData = fetchData("https://api.sampleapis.com/beers/ale");

function BeerList() {
  const data = apiData.read();
  return (
    <ul className="beers">
      {data?.map((beer) => (
        <li key={beer.id}>
          <h3>{beer.name}</h3>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <BeerList />
      </Suspense>
    </div>
  );
}

export default App;

import React, { Suspense, useState } from "react";
import Header from "./components/Header";
import fetchData from "./components/FetchData";
import ReactPaginate from 'react-paginate';

import "./App.css";

const apiData = fetchData("https://api.sampleapis.com/beers/ale");

function BeerList() {
  const [pageNumber, setPageNumber] = useState(0);
  const beersPerPage = 8;

  const data = apiData.read();
  data.sort((a, b) => a.name.localeCompare(b.name));
  
  const offset = pageNumber * beersPerPage;
  const currentPageData = data.slice(offset, offset + beersPerPage);

  const pageCount = Math.ceil(data.length / beersPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <ul className="beers">
        {currentPageData?.map((beer) => (
          <li key={beer.id}>
            <h3>{beer.name}</h3>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
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

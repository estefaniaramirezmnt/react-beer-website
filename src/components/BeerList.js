import React, { useState, useContext } from "react";
import ReactPaginate from 'react-paginate';
import { ApiContext } from "./ApiContext";

function BeerList() {
  const apiData = useContext(ApiContext);
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

export default BeerList;

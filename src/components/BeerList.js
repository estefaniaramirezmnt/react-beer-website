import React, { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { ApiContext } from "./ApiContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectOrder from "./SelectOrder";
import noImageAvailable from "../img/noImageAvailable.jpg";

function BeerList() {
  const apiData = useContext(ApiContext);
  const [data, setData] = useState(apiData.read());
  const [pageNumber, setPageNumber] = useState(0);

  const beersPerPage = 8;
  const offset = pageNumber * beersPerPage;
  const currentPageData = data.slice(offset, offset + beersPerPage);
  const pageCount = Math.ceil(data.length / beersPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSort = (sortedData) => {
    setData([...sortedData]);
  };

  const handleImageError = (e) => {
    e.target.src = noImageAvailable;
  };

  return (
    <div>
      <SelectOrder onSort={handleSort} />
      <div className="beer-container">
        <Row className="row-of-beers">
          {currentPageData?.map((beer) => (
            <Col key={beer.id} lg={3} sm={6}>
              <div className="individual-beer">
                <h3>{beer.name}</h3>
                <img 
                  src={beer.image} 
                  alt={beer.name} 
                  className="beer-image" 
                  onError={handleImageError}
                />
                <p className="beer-price">${beer.price.slice(1)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default BeerList;

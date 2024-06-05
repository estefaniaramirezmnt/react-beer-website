import { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { ApiContext } from "./ApiContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort">
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>
      <div className="beer-container">
        <Row className="row-of-beers">
          {currentPageData?.map((beer) => (
            <Col key={beer.id} lg={3} sm={6}>
              <div className="individual-beer">
                <h3>{beer.name}</h3>
                <img src={beer.image} alt={beer.name} className="beer-image" />
                <p className="beer-price">${beer.price.slice(1)}</p>
                {/* The price is a string */}
                {/* <p className="beer-price">{beer.price}</p> */}
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

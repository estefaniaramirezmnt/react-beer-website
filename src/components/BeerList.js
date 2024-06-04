import { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { ApiContext } from "./ApiContext";
// import boostrap
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
      {/* <ul className="beers">
        {currentPageData?.map((beer) => (
          <li key={beer.id}>
            <h3>{beer.name}</h3>
            <img src={beer.image} alt={beer.name} />
          </li>
        ))}
      </ul> */}
      {/* Display the data with rows and columns with boostrap */}

      <div className="beer-container">
        <Row className="row-of-beers">
          {currentPageData?.map((beer) => (
            <Col key={beer.id} lg={3} sm={6}>
              <div className="individual-beer">
                <h3>{beer.name}</h3>
                <img src={beer.image} alt={beer.name} className="beer-image" />
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

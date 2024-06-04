import { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { ApiContext } from "./ApiContext";
// import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

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

      <Container className="beer-container">
        <Row>
          {currentPageData?.map((beer) => (
            <Col key={beer.id} md={3} className="individual-beer">
              <h3>{beer.name}</h3>
              <Image src={beer.image} alt={beer.name} fluid />
            </Col>
          ))}
        </Row>
      </Container>
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

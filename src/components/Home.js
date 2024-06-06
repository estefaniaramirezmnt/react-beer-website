import React from "react";
import coldBeer from "../img/coldBeer.jpg";
import closeViewBeer from "../img/closeViewBeer.jpg";
import beerToast from "../img/beerToast.jpg";
import severalBeers from "../img/severalBeers.jpg";
import beerAndBread from "../img/beerAndBread.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div className="home-container">
      <h3 className="home-title">A page dedicated to beer lovers!</h3>
      <div className="home-img-container">
            <img src={coldBeer} alt="Cold beer" className="coldBeer1" />
            <img src={closeViewBeer} alt="Cold beer" className="closeViewBeer" />
            <img src={beerToast} alt="Friends in a field toasting with beers" className="beerToast" />
            <img src={severalBeers} alt="Different beers in a table" className="severalBeers" />
            <img src={beerAndBread} alt="Beer and bread" className="bearAndBread" />
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ApiContext } from "./ApiContext";

function FindYourBeer() {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null); 
  const [showShadow, setShowShadow] = useState(false);

  const apiData = useContext(ApiContext);
  const beers = apiData.read();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const filtered = beers.filter((beer) => {
      return (
        inputValue &&
        beer &&
        beer.name &&
        beer.name.toLowerCase().includes(inputValue)
      );
    });
    setFilteredBeers(filtered);
    setShowShadow(filtered.length > 0); 
  }, [inputValue, beers]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleBeerClick = (beer) => {
    setSelectedBeer(beer);
  }

  return (
    <div className="search-container">
      <div className="input-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-logo" />
        <input
          type="text"
          placeholder="Search for a beer..."
          className="search-bar"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <h3>Find Your Beer 🍺</h3>
      <div className={`results-list ${showShadow ? "show-shadow" : ""}`}>
        {filteredBeers.map((beer) => (
          <div key={beer.id} onClick={() => handleBeerClick(beer)}>
            <p>{beer.name}</p>
          </div>
        ))}
      </div>
      {selectedBeer && (
        <div className="selected-beer">
          <img src={selectedBeer.image} alt={selectedBeer.name} />
          <h3>{selectedBeer.name}</h3>
          <p>Price: {selectedBeer.price}</p>
          <p>Rating: {selectedBeer.rating.average.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default FindYourBeer;

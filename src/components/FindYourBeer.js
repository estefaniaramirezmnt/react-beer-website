import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ApiContext } from "./ApiContext";

function FindYourBeer() {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);
  
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
  }, [inputValue, beers]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

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
      <div className="results-list">
        {filteredBeers.map((beer) => (
          <div key={beer.id}>
            <p>{beer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindYourBeer;

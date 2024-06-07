import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ApiContext } from "./ApiContext";

function FindYourBeer() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const apiData = useContext(ApiContext);
  const beers = apiData.read();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const filteredBeers = beers
    .filter((beer) =>
      beer.name.toLowerCase().includes(inputValue)
    )
    .slice(0, 10); // Limitar a 6 resultados

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
      {inputValue && (
        <div className="results-container">
          <ul>
            {filteredBeers.map((beer) => (
              <li key={beer.id}>{beer.name}</li>
            ))}
          </ul>
        </div>
      )}
      <h3>Find Your Beer 🍺</h3>
    </div>
  );
}

export default FindYourBeer;
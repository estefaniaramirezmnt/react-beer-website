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

  const filteredBeers = beers.filter((beer) => {
    return (
      inputValue &&
      beer &&
      beer.name &&
      beer.name.toLowerCase().includes(inputValue)
    );
  });
  console.log(filteredBeers);
  
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
    </div>
  );
}

export default FindYourBeer;

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function FindYourBeer() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
      <h3>Find Your Beer</h3>
    </div>
  );
}

export default FindYourBeer;

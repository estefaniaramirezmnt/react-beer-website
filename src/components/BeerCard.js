import React from "react";
import noImageAvailable from "../img/noImageAvailable.jpg";


function BeerCard({ beer }) {
  const renderRatingStars = (rating) => {
    const starCount = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const handleImageError = (e) => {
    e.target.src = noImageAvailable;
  };

  return (
    <div className="selected-beer">
      <img
        src={beer.image}
        alt={beer.name}
        onError={handleImageError}
      />{" "}
      <h3>{beer.name}</h3>
      <p className="selected-beer-price">
        <span>Price:</span> {beer.price}
      </p>
      <p className="selected-beer-rating">
        <span>Rating:</span> {beer.rating.average.toFixed(2)}
        {renderRatingStars(beer.rating.average)}
      </p>
    </div>
  );
}

export default BeerCard;

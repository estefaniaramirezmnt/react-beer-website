import React from "react";

function BeerCard({ beer }) {
  const renderRatingStars = (rating) => {
    const starCount = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <div className="selected-beer">
      <img src={beer.image} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p className="selected-beer-price"><span>Price:</span> {beer.price}</p>
      <p className="selected-beer-rating">
        <span>Rating:</span> {beer.rating.average.toFixed(2)} 
        {renderRatingStars(beer.rating.average)}
      </p>
    </div>
  );
}

export default BeerCard;

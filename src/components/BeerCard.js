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
      <p>Price: {beer.price}</p>
      <div>
        <span>Rating: {beer.rating.average.toFixed(2)} </span>
        {renderRatingStars(beer.rating.average)}
      </div>
    </div>
  );
}

export default BeerCard;

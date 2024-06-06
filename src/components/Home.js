import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import coldBeer from "../img/coldBeer.jpg";
import closeViewBeer from "../img/closeViewBeer.jpg";
import beerToast from "../img/beerToast.jpg";
import severalBeers from "../img/severalBeers.jpg";
import beerAndBread from "../img/beerAndBread.jpg";

function Home() {
  const images = [
    { 
      original: coldBeer,
      thumbnail: coldBeer,
    },
    { original: closeViewBeer,
      thumbnail: closeViewBeer,
     },
    { original: beerToast,
      thumbnail: beerToast
     },
    { original: severalBeers,
      thumbnail: severalBeers
     },
    { original: beerAndBread,
      thumbnail: beerAndBread
     },
  ];

  return (
    <div className="home-container">
      <h3 className="home-title">A PAGE DEDICATED TO BEER LOVERS!</h3>
      <ImageGallery items={images} 
        showPlayButton={true}
        showFullscreenButton={false}
        slideInterval={4000}
        autoPlay={true}
      />
    </div>
  );
}

export default Home;

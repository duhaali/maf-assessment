import React, { useState } from 'react';

import villas from "../mock-data";

function Gallery() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const swipe = direction => () => {
    if (direction === "next" && currentIndex !== villas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section class=" sm:flex-col md:flex-row-reverse lg:flex-col-reverse xl:flex-row">
      <div className="villa-details" >
        <div className="villa-location" class=" flex w-1/12 text-xs">
          <p>{villas[currentIndex].location}</p>
        </div>
        <div className="villa-title" class=" flex w-1/12 text-6xl">
          <h1>{villas[currentIndex].villa}</h1>
        </div>
      </div>
      <div className="villa-image-section" >
        <div className="villa-image">
          <img src={require(`../assets/images/${villas[currentIndex].imageName}`)} alt="villa"></img>
        </div>
        <div className="image-details">
          <p>Details</p>
        </div>
      </div>
      <div className="control-buttons">
        <button
          className="control-button"
          disabled={currentIndex === 0}
          onClick={swipe("prev")}>
          PREV
        </button>
        <button
          className="control-button"
          disabled={currentIndex === villas.length - 1}
          onClick={swipe("next")}>
          Next
        </button>
      </div>
    </section>
  )
}

export default Gallery;

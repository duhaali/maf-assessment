import React, { useState } from 'react';

const villas = require("../mock-data");

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
    <section className="flex flex-wrap w-full px-8 lg:w-10/12 lg:py-10h lg:pl-8w">
      <div className="villa-details flex flex-col w-full lg:w-6/12" >
        <div className="villa-location py-4 mr-auto text-sm order-2 lg:order-none">
          <p>{villas[currentIndex].location}</p>
        </div>
        <div className="villa-title mr-auto mt-auto mb-auto text-6xl font-mont text-left w-full lg:w-64">
          <h1 className="leading-none lg:leading-normal">{villas[currentIndex].villa}</h1>
          {/* Large Screen Arrows */}
          <div className="control-buttons relative text-sm w-6/12 ml-auto mt-4 hidden lg:block">
            <button
              className="prev-button w-6/12 disabled:opacity-50"
              disabled={currentIndex === 0}
              onClick={swipe("prev")}>
              PREV
            </button>
            <button
              className="next-button w-6/12 disabled:opacity-50"
              disabled={currentIndex === villas.length - 1}
              onClick={swipe("next")}>
              NEXT
            </button>
          </div>
        </div>
        {/* Image Number */}
        <div className="flex-wrap items-center text-3xl text-lightGray-100 hidden lg:flex">
          <div className="mr-10">0{currentIndex + 1}</div> 
          <div className="count-separator mr-10 bg-lightGray-100 w-10 h-px"></div>
          <div className="">0{villas.length}</div>
          </div>
      </div>
      <div className="villa-image-section relative w-full lg:w-6/12 overflow-hidden" >
        {/* Small Screen Arrows */}
        <div className="arrows flex justify-between items-center absolute w-full h-full px-4 lg:hidden">
          <button className="arrow bg-white h-10 w-10 bg-opacity-50 rounded-full outline-none"
            disabled={currentIndex === 0}
            onClick={swipe("prev")}>
            &lt;
          </button>
          <button className="arrow bg-white h-10 w-10 bg-opacity-50 rounded-full outline-none"
            disabled={currentIndex === villas.length - 1}
            onClick={swipe("next")}>
            &gt;
          </button>
        </div>
        <img src={require(`../assets/images/${villas[currentIndex].imageName}`)} alt="villa" className="villa-image md:w-full"></img>
        <div className="image-details flex items-end absolute bottom-0 left-0 lg:w-4/12 lg:h-16 bg-white">
          <p className="">Details &rarr;</p>
        </div>
      </div>
    </section>
  )
}

export default Gallery;

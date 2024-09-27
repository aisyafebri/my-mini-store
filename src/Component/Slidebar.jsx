import React, { useState, useEffect, useRef } from 'react';

function Slidebar({ totalSlides, currentSlide, onSlideChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft = (currentSlide / totalSlides) * slider.scrollWidth;
    }
  }, [currentSlide, totalSlides]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSliderChange = () => {
    const slider = sliderRef.current;
    const newSlide = Math.round((slider.scrollLeft / slider.scrollWidth) * totalSlides);
    onSlideChange(newSlide);
  };

  const handlePrev = () => {
    onSlideChange(Math.max(0, currentSlide - 1));
  };

  const handleNext = () => {
    onSlideChange(Math.min(totalSlides, currentSlide + 1));
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={handlePrev}
        className="px-2 py-1 bg-gray-200 rounded-md text-sm"
      >
        &#10094;
      </button>
      <div
        ref={sliderRef}
        className="w-48 h-4 bg-gray-200 rounded-md overflow-hidden cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleSliderChange}
      >
        <div
          className="h-full bg-gray-500 rounded-md"
          style={{ width: `${100 / (totalSlides + 1)}%`, transform: `translateX(${currentSlide * 100}%)` }}
        ></div>
      </div>
      <button
        onClick={handleNext}
        className="px-2 py-1 bg-gray-200 rounded-md text-sm"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slidebar;
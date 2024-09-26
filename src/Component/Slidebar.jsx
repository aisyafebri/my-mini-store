import React, { useState } from 'react';

function Slidebar() {
  const [progress, setProgress] = useState(40); // Initial progress (percentage)

  const nextSlide = () => {
    setProgress((prev) => (prev >= 100 ? 100 : prev + 10)); // Increment by 10
  };

  const prevSlide = () => {
    setProgress((prev) => (prev <= 0 ? 0 : prev - 10)); // Decrement by 10
  };

  return (
    <div className="flex items-center justify-center w-full my-8">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400 focus:outline-none"
      >
        &#9664; {/* Left Arrow */}
      </button>

      {/* Progress Bar */}
      <div className="relative w-full max-w-2xl h-8 mx-4 bg-gray-200 rounded-lg">
        <div
          className="bg-gray-400 h-full rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400 focus:outline-none"
      >
        &#9654; {/* Right Arrow */}
      </button>
    </div>
  );
}

export default Slidebar;

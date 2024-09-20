import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full ${isFixed ? 'fixed top-0 left-0 z-10' : ''}`}>
      <div className="bg-sky-500 p-4">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder='Coba cari "Tolong menolong"'
            className="w-full py-2 pl-4 pr-10 rounded-full bg-white text-gray-800 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
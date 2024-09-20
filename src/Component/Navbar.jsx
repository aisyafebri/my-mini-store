import React from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="fixed static-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="h-full max-w-lg grid-cols-4 mx-auto">
          <div className="flex-1 flex items-center justify-center">
            <SearchBar />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
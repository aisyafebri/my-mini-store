import React from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
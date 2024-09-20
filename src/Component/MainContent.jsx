import React from 'react';
import SearchBar from './SearchBar'; // Pastikan path ini sesuai dengan struktur proyek Anda

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Mini Store</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <SearchBar />
          {/* Tambahkan komponen lain atau konten di sini */}
        </div>
      </main>
    </div>
  );
};

export default App;
import React from 'react';

const Buttonfav = () => {
  const categories = [
    { name: 'Bencana Alam', icon: 'https://assets.kitabisa.cc/images/categories/icon-bencana.svg' },
    { name: 'Balita & Anak Sakit', icon: 'https://assets.kitabisa.cc/images/categories/icon-balita.svg' },
    { name: 'Bantuan Medis & Kesehatan', icon: 'https://assets.kitabisa.cc/images/categories/icon-medis.svg' },
    { name: 'Lainnya', icon: 'https://assets.kitabisa.cc/images/categories/icon-list.svg' },
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Pilih Kategori Favoritmu</h2>
      
      <div className="flex justify-between mb-6">
        {categories.map((categories, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white-100 rounded-full p-4 mb-2">
            <img src={categories.icon} alt={categories.name} className="w-12 h-12" />
            </div>
            <span className="text-ls text-center">{categories.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttonfav;
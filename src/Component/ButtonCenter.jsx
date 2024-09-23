import React from 'react';

const ButtonCenter = () => {
  const deeds = [
    { name: 'Donasi', icon: '🧡' },
    { name: 'Zakat', icon: '📅' },
    { name: 'Galang Dana', icon: '🫕' },
    { name: 'Donasi Otomatis', icon: '📆' },
    { name: 'Voluntrip', icon: '🫶' },
    { name: 'Kolaborasi CSR', icon: '🌍', isNew: true },
  ];

  return (
    <div className="container mx-auto ">
      <h2 className="text-xl font-semibold mb-4 text-center">Mau berbuat baik apa hari ini?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-1">
        {deeds.map((deed) => (
          <div key={deed.name} className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-2">
              <span className="text-4xl">{deed.icon}</span>
            </div>
            <p className="text-sm font-medium text-center">
              {deed.name}
              {deed.isNew && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">BARU</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonCenter;

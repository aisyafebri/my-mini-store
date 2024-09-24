import React from 'react';

const ButtonCenter = () => {
  const deeds = [
    { name: 'Donasi', icon: 'https://gudang-prod.kitabisa.com/images/39bf5bf1-0b8c-11ef-922c-560ba81ec564_48C0484EFE1896B7.png' },
    { name: 'Zakat', icon: 'https://gudang-prod.kitabisa.com/images/4d7eb2aa-0b8c-11ef-b5a4-9e1c359904b5_193B9D9E90ED4D73.png' },
    { name: 'Galang Dana', icon: 'https://gudang-prod.kitabisa.com/images/5ef4a61d-0b8c-11ef-a133-5e178fd37903_89746E0009E0F5AB.png' },
    { name: 'Donasi Otomatis', icon: 'https://gudang-prod.kitabisa.com/images/74f805ac-0b8c-11ef-946a-d602445454fc_75200A790DABC405.png' },
    { name: 'Voluntrip', icon: 'https://gudang-prod.kitabisa.com/images/8527a215-0b8c-11ef-8a0e-d647d7f1e3f6_9BC707BA060E004D.png' },
    { name: 'Kolaborasi CSR', icon: 'https://gudang-prod.kitabisa.com/images/dfaa07eb-02f8-11ef-8f87-d21d1fd5020d_C3AA4CB4D6F2C7.png' },
  ];

  return (
    <div className="container mx-auto ">
      <h2 className="text-base font-semibold text-center">Mau berbuat baik apa hari ini?</h2>
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {deeds.map((deed) => (
          <div key={deed.name} className="flex flex-col items-center">
            <div className="bg-white-100 rounded-full p-4 mb-2">
            <img src={deed.icon} alt={deed.name} className="w-12 h-12" />
            </div>
            <p className="text-sm font-medium text-center">
              {deed.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonCenter;

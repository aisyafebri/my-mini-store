import React from 'react';

const Informaricard = () => {
  return (
    <div className="space-y-8">
      <div className="flex space-x-4 items-center">
        <img src="https://assets.kitabisa.cc/images/categories/icon-bencana.svg" alt="Tentang Kitabisa" className="w-20 h-20"/>
        <div>
          <h3 className="text-xl font-semibold">Tentang Kitabisa</h3>
          <p>Pelajari mengenai pengelolaan dan dampak donasi via Kitabisa</p>
          <a href="#" className="text-blue-500">Baca selengkapnya &gt;</a>
        </div>
      </div>

      <div className="flex space-x-4 items-center">
        <img src="https://assets.kitabisa.cc/images/categories/icon-bencana.svg" alt="SalingJaga Keluarga" className="w-20 h-20"/>
        <div>
          <h3 className="text-xl font-semibold">SalingJaga Keluarga</h3>
          <p>Siapkan santunan untuk keluarga saat tutup usia</p>
          <a href="#" className="text-blue-500">Baca selengkapnya &gt;</a>
        </div>
      </div>

      <div className="flex space-x-4 items-center">
        <img src="https://assets.kitabisa.cc/images/categories/icon-bencana.svg" alt="Kolaborasi Perusahaan dan Brand" className="w-20 h-20"/>
        <div>
          <h3 className="text-xl font-semibold">Kolaborasi Perusahaan dan Brand</h3>
          <p>Solusi bagi perusahaanmu membuat dampak berkelanjutan berbasis ESG</p>
          <a href="#" className="text-blue-500">Baca selengkapnya &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Informaricard;

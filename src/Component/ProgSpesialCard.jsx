import React, { useState } from 'react';
import Slidebar from './Slidebar';

function ProgSpesialCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };
  const cards = [
    {
      owner: 'Nova Eliza',
      title: 'Bantu Renovasi Masjid di Pelosok Aceh',
      description: 'Terkumpul',
      amount: 'Rp16.828.000',
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F16fdd302-8ad3-437b-a21a-7fe6a74b206b.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
    },
    {
      owner: 'Pondok IT',
      title: 'Sedekah Subuh, Wujudkan Mimpi Santri Qur`an Pondok IT',
      description: 'Tersedia',
      amount: 'Rp18.813.681',
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F0fa56375-614f-42fd-b3d1-8b6cdff1b8a3.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
    },
    {
      owner: 'Kitasobi',
      title: 'Sedekah Bantu Warga Dhuafa Khusyuk Ibadah',
      description: 'Tersedia',
      amount: 'Rp35.084.407',
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F24ae12a3-5f66-45d2-9a89-c68bc1fc409f.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cards.length - 2 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cards.length - 2 : prevSlide - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-8 max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold text-left mb-4">Program Spesial Kitabisa</h2>

      <div className="relative">
        {/* Card Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-1/2  p-2 flex-shrink-0"
              
            > 
              <div className="bg-white rounded-lg shadow-lg p-2 w-full">
  <img src={card.image} alt={`Gambar ${index + 1}`} className="w-full h-20 object-cover rounded-lg" />
  <div className="flex items-center mt-1">
    <p className="text-gray-600 text-xs mr-1">{card.owner}</p>
    <img
      className="w-3 h-3 inline-block"
      src="https://media.istockphoto.com/id/1344841941/id/vektor/ikon-akun-terverifikasi-biru-tanda-profil-yang-disetujui-centang-di-sudut-bulat-bintang-logo.jpg?s=612x612&w=0&k=20&c=CjoLy4l4EVyg7dAmiKxS2XC3DfYfDKTEy-0o9wgQTN0="
      alt="Verified"
    />
  </div>
  <h3 className="text-xs font-semibold mt-1 line-clamp-2">{card.title}</h3>
  <div className="flex justify-between items-center mt-1">
    <p className="text-xs text-gray-600">{card.description}</p>
    <p className="text-xs text-blue-500 font-bold">{card.amount}</p>
  </div>
  <svg width="100%" height="4" viewBox="0 0 100 4" preserveAspectRatio="none" className="mt-1">
    <rect x="0" y="0" width="100" height="4" rx="2" fill="#e8e8e8" />
    <rect x="0" y="0" width="22.437334" height="4" rx="2" fill="#10a8e5" />
  </svg>
</div>
              
            </div>
          ))}
        </div>
        
        {/* Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-1 rounded-full text-xs"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-1 rounded-full text-xs"
          onClick={nextSlide}
        >
          &#10095;
        </button>
        <Slidebar
        totalSlides={cards.length - 2}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
      />
        </div>
      </div>
   
  );
}

export default ProgSpesialCard;

import React, { useState } from 'react';

function ProgSpesialCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards = [
    {
      title: '1 Sedekahmu = Paket Makanan Bergizi untuk Anak Yatim Dhuafa',
      description: 'Sedekah Sekarang',
      amount: 'Rp79.531.044',
      image: 'https://via.placeholder.com/400x300?text=Gambar+1',
    },
    {
      title: 'Sedekah Makanan untuk Anak Yatim & Warga Dhuafa',
      description: 'Do Good Be Good',
      amount: 'Rp50.133.406',
      image: 'https://via.placeholder.com/400x300?text=Gambar+2',
    },
    {
      title: 'Sedekah Jariyah Wujudkan Mimpi Penghafal Quran',
      description: 'Daarul Anwar',
      amount: 'Rp37.444.123',
      image: 'https://via.placeholder.com/400x300?text=Gambar+3',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cards.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cards.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-4 max-w-xs mx-auto p-4">
      <h2 className="text-md font-bold mb-4">Program Spesial Kitabisa</h2>

      <div className="relative">
        {/* Card Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-4 flex-shrink-0"
              style={{ minWidth: '100%' }}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 w-full">
                <img src={card.image} alt={`Gambar ${index + 1}`} className="w-full rounded-lg" />
                <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
                <p className="text-blue-500 font-bold mt-2">{card.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#10095;
        </button>

       
        </div>
      </div>
   
  );
}

export default ProgSpesialCard;

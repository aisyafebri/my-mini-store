import React, { useState, useEffect } from 'react';

function DonasiCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://via.placeholder.com/400x300?text=Gambar+1',
    'https://via.placeholder.com/400x300?text=Gambar+2',
    'https://via.placeholder.com/400x300?text=Gambar+3',
    'https://via.placeholder.com/400x300?text=Gambar+4',
    'https://via.placeholder.com/400x300?text=Gambar+5'
  ];

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white rounded-lg shadow-md mt-8 max-w-md mx-auto p-4">
      <div className="p-4">
        <h2 className="text-xl font-bold">Rekomendasi Kegiatan Baik</h2>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-lg mt-4">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Gambar ${index + 1}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Tombol Aksi */}
        <button className="bg-green-500 text-white font-bold rounded-full px-4 py-2 mt-4">
          Sedekah Sekarang
        </button>
      </div>
    </div>
  );
}

export default DonasiCard;

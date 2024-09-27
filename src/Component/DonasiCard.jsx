import React, { useState, useEffect } from 'react';

function DonasiCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2F77005399-7a1b-11ef-9b0d-3e503950e173_6110FF1E712BF1E2.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1920&q=75',
    'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2F7be3a3f9-7a1b-11ef-9b0d-3e503950e173_657E5722E5010686.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1920&q=75',
    'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2F80d1f67b-7a1b-11ef-9b0d-3e503950e173_EB7C3EBEA25B5AAC.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1920&q=75',
    'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2Fbaae9d0c-7a1b-11ef-9b0d-3e503950e173_612AB29A7759A5F.png%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1920&q=75',
    
  ];

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white rounded-lg shadow-md mt-8 max-w-md mx-auto ">
      <div >
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
        
      </div>
    </div>
  );
}

export default DonasiCard;

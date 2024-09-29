import React, { useState, useRef, useEffect } from 'react';

const NewsPenggalangan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);
  const campaigns = [
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F11b78112-ae8b-4c95-be6e-75e3cce8de57.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'SUMBER PAHALA: Sedekah Bangun Masjid Pasca-Bencana',
      organization: 'Baitul Maal Itqan',
      isVerified: true,
      description: 'Tersedia',
      amount: 'Rp119.039.938',
      progress: 40,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F75c44db4-3ca1-4699-aa60-3585187bac97.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'SEDEKAH JUMAT Sisihkan Rezeki Berbagi 1000 Qur`an',
      organization: 'Penderma.id',
      isVerified: true,
      description: 'Terkumpul',
      amount: 'Rp55.047.523',
      progress: 20,
      daysLeft: 32,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1fbe1870-bb37-46a3-b9da-036e8b447913.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'JUM`AT BERKAH! Berbagi Makanan tuk Saudara Dhuafa',
      organization: 'Jagabersama',
      isVerified: true,
      description: 'Tersedia',
      amount: 'Rp55.172.627',
      progress: 100,
    },
  ];

  const cardsPerView = 2;
  const totalSlides = Math.ceil(campaigns.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentSlide * 256, // 256px is the width of each card (w-64)
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <div className="max-w-md mx-auto bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Pilihan Jumat Berkah</h2>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="overflow-x-auto flex space-x-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {campaigns.map((campaign, index) => (
              <div key={index} className="w-1/2 flex-shrink-0 px-2">
                <div className="border rounded-lg overflow-hidden shadow-md">
                  <div className="relative">
                    <img src={campaign.image} alt={campaign.title} className="w-full h-32 object-cover" />
                    {campaign.daysLeft && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {campaign.daysLeft} hari lagi
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex items-center mb-1">
                      <span className="text-xs text-gray-600 mr-1">{campaign.organization}</span>
                      {campaign.isVerified && (
                        <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{campaign.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{campaign.description}</p>
                    <p className="text-sm font-bold text-blue-600">{campaign.amount}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full text-xs z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full text-xs z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>  
  );
};

export default NewsPenggalangan;







import React, { useState, useRef, useEffect } from 'react';

const NewsPenggalangan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);
  const campaigns = [
    {
      owner: 'Nova Eliza',
      title: 'Bantu Renovasi Masjid di Pelosok Aceh',
      description: 'Terkumpul',
      amount: 'Rp27.322.000',
      isVerified: true,
      progress: 40,
      daysLeft: 72,
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F16fdd302-8ad3-437b-a21a-7fe6a74b206b.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
    },
    {
      owner: 'Pondok IT',
      title: 'Sedekah Subuh, Wujudkan Mimpi Santri Qur`an Pondok IT',
      description: 'Tersedia',
      amount: 'Rp28.270.851',
      isVerified: true,
      progress: 20,
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F0fa56375-614f-42fd-b3d1-8b6cdff1b8a3.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
    },
    {
      owner: 'Kitasobi',
      title: 'Sedekah Bantu Warga Dhuafa Khusyuk Ibadah',
      description: 'Tersedia',
      amount: 'Rp40.695.320',
      isVerified: true,
      progress: 60,
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F24ae12a3-5f66-45d2-9a89-c68bc1fc409f.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
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
      <h2 className="text-xl font-bold mb-4">Program Spesial Kita Bisa</h2>
      
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













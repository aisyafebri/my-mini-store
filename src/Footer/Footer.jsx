import React from 'react';

const Footer = () => {
  const socialMediaLinks = [
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-socmed-fb.svg', url: '#' },
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-socmed-twitter.svg', url: '#' },
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-socmed-instagram.svg', url: '#' },
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-socmed-youtube.svg', url: '#' },
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-socmed-tiktok.svg', url: '#' },
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-linkedin.svg', url: '#' },
    { icon: 'https://assets.kitabisa.cc/images/icons/footer/icon-techinasia.svg', url: '#' },
  ];

  return (
    
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <hr />
      <footer className="py-4 px-4 text-center">
        <p className="text-xs text-gray-600 mb-2">
          Berdiri sejak 2013, Kitabisa memiliki izin Pengumpulan Uang dan Barang dari Kemensos. Kitabisa rutin diaudit dengan status Wajar Tanpa Pengecualian (WTP).
        </p>
        <hr />
        <div className="mb-4 text-xs">
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Tentang Kitabisa</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Syarat & Ketentuan</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Pusat Bantuan</a>
        </div>
        
        <div className="flex justify-center space-x-2 mb-4">
          {socialMediaLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition duration-300"
            >
              <img src={link.icon} alt="Social Media Icon" className="w-4 h-4" />
            </a>
          ))}
        </div>
        
        <p className="text-xs text-gray-500">
          Copyright © {new Date().getFullYear()} Kitabisa. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
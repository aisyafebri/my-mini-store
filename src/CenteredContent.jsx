import React from 'react';

const CenteredContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      

      {/* Main Section */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-blue-600">
          Saling Jaga Se-Indonesia ID
        </h1>
        <h2 className="text-2xl font-semibold text-blue-500">
          Bantu Sesama, Dibantu Bersama
        </h2>
        <p className="text-gray-700 mt-2">
          Donasi, zakat, dan lindungi keluarga bersama jutaan orang baik melalui aplikasi Kitabisa
        </p>

        {/* App Store & Google Play Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://apps.apple.com" className="block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-12"
            />
          </a>
          <a href="https://play.google.com" className="block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
            Buat galang dana untuk ajak ribuan orang baik berdonasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenteredContent;

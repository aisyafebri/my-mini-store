import React from 'react';

const NavBawah = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {/* Home Button */}
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 group"
        >
          <img
            className="w-4 h-4 mb-1"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/home_navbar_active.svg"
            alt="Donasi Icon"
          />
          <span className="text-xs text-gray-500 group-hover:text-blue-600">
            Donasi
          </span>
        </button>

        {/* Wallet Button */}
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 group"
        >
          <img
            className="w-4 h-4 mb-1"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/plus_navbar.svg"
            alt="Galang Dana Icon"
          />
          <span className="text-xs text-gray-500 group-hover:text-blue-600">
            Galang Dana
          </span>
        </button>

        {/* Settings Button */}
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 group"
        >
          <img
            className="w-4 h-4 mb-1"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/donasi_navbar.svg"
            alt="Donasi Saya Icon"
          />
          <span className="text-xs text-gray-500 group-hover:text-blue-600">
            Donasi Saya
          </span>
        </button>

        {/* Profile Button */}
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-4  group"
        >
          <img
            className="w-4 h-4 mb-1"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/inbox_navbar.svg"
            alt="Inbox Icon"
          />
          <span className="text-xs text-gray-500 group-hover:text-blue-600">
            Inbox
          </span>
        </button>

        {/* New Button */}
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 group"
        >
          <img
            className="w-4 h-4 mb-1"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/account_navbar.svg"
            alt="Akun Icon"
          />
          <span className="text-xs text-gray-500 group-hover:text-blue-600">
            Akun
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBawah;

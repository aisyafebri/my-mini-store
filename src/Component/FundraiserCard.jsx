import React from 'react';

const FundraiserCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8 max-w-xl mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <img src="/path-to-fundraiser-icon.png" alt="Fundraiser" className="w-12 h-12 mr-4" />
        <p className="text-lg font-semibold">Buat galang dana untuk ajak ribuan orang baik berdonasi</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default FundraiserCard;
import React from 'react';

const FundraiserCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md  mt-8 max-w-md mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <img src="https://kitabisa.com/images/illustration/galang-dana-sekarang.svg" alt="Fundraiser" className="w-50 h-auto mr-8" />
        <h1 className="text-lg font-bold">Buat galang dana untuk ajak ribuan orang baik berdonasi</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default FundraiserCard;
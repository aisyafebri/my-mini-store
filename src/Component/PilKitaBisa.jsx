import React from 'react';

const PilKitaBisa = () => {
  const campaigns = [
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1d8e955e-829b-451c-a37c-2dfadd3f0c63.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'Sedekah Berbagi Alat Sekolah tuk Siswa Dhuafa',
      organization: 'Yayasan Ruang Sejahtera Umat',
      isVerified: true,
      description: 'Terkumpul',
      amount: 'Rp24.218.439',
      progress: 30,
      daysLeft: 38,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F6c1702a2-283a-4d16-abb2-bd5399f71d65.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'Sedekah Subuh Bantu Difabel Pencari Nafkah ',
      organization: 'Yayasan Cahaya Sedekah Kebaikan',
      isVerified: true,
      description: 'Terkumpul',
      amount: 'Rp26.770.317',
      progress: 20,
      daysLeft: 21,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fabb98e84-f729-42e7-b7e7-26596dc94402.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'Pahala Mengalir Deras,Sedekah Air untuk Sesama',
      organization: 'Yayasan Gugah Nurani Indonesia',
      isVerified: true,
      description: 'Terkumpul',
      amount: 'Rp122.572.374',
      progress: 100,
      daysLeft: 53,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fee440aa7-8405-41c0-9a36-e281a2bc0d09.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'Makan Lauk Seadanya Hanya 15Rb Bisa Sedekah Makan',
      organization: 'Insan Cendekia Gemilang Foundation',
      isVerified: true,
      description: 'Terkumpul',
      amount: 'Rp26.344.979',
      progress: 20,
      daysLeft: 59,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fd35847c5-2036-41dc-bac2-be5501556ada.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'Diupah Seikhlasnya, Bantu Guru Ngaji Hidup Layak',
      organization: 'Yayasan Madinatur Rahmah Hidayah',
      isVerified: true,
      description: 'Terkumpul',
      amount: 'Rp4.693.077',
      progress: 5,
      daysLeft: 95,
    },
    {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F2a1c8a46-71cd-4579-b671-c9cfe9c8e3a9.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: 'Sedekah Berbagi Alat Sekolah tuk Siswa Dhuafa',
        organization: 'Yayasan Winakara',
        isVerified: true,
        description: 'Terkumpul',
        amount: 'Rp56.780.084',
        progress: 40,
        daysLeft: 69,
      },
      {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fd746a2fd-1c17-408f-b48a-66fd1d8e9108.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: 'Sedekah Subuh tuk 100+ Pejuang Nafkah Keluarga',
        organization: 'Salam Setara',
        isVerified: true,
        description: 'Terkumpul',
        amount: 'Rp120.290.239',
        progress: 100,
      },{
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Ff673d141-8179-49eb-b764-df8969abae50.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: 'Lahir Sumbing,Temani Adik Kecil Berjuang Sembuh!',
        organization: 'Penghubung Kebaikan',
        isVerified: true,
        description: 'Terkumpul',
        amount: 'Rp67.223.619',
        progress: 60,
        daysLeft: 74,
      },
      {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F6831afa6-65b0-4dcb-a5a2-84ebef729577.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: 'Berkah Melimpah! Santunan tuk 1000+ Yatim Sekolah',
        organization: 'Kitabisa.org',
        isVerified: true,
        description: 'Tersedia',
        amount: 'Rp79.877.522',
        progress: 60,
      },
      {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F0f845b70-98fb-423c-9d58-f3a6240474cf.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: 'Gerobak Darimu Selamatkan Hidup Banyak Keluarga!',
        organization: 'CollabForChange',
        isVerified: true,
        description: 'Terkumpul',
        amount: 'Rp132.347.713',
        progress: 90,
        daysLeft: 95,
      },
      {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fd35847c5-2036-41dc-bac2-be5501556ada.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: 'Selamatkan Anak Dhuafa tuk Kesehatan Lebih Baik',
        organization: 'Penghubung Kebaikan',
        isVerified: true,
        description: 'Terkumpul',
        amount: 'Rp1.277.000',
        progress: 10,
        daysLeft: 95,
      },

  ];

  return (
    <div className="max-w-md mx-auto bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Pilihan Kitabisa</h2>
      
      <div className="relative overflow-x-auto">
        <div className="flex space-x-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="w-64 flex-shrink-0 border rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img src={campaign.image} alt={campaign.title} className="w-full h-32 object-cover" />
                {campaign.daysLeft && (
                  <div className="absolute top-2  bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
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
          ))}
        </div>
      </div>
     
      <h3 className="text-lg font-semibold mt-6 mb-4">Pilih Kategori Favoritmu</h3>
    </div>  
  );
};

export default PilKitaBisa;
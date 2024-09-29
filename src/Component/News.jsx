import React from 'react';

const News = () => {
  const campaigns = [
    {
      image: 'https://example.com/masjid-image.jpg',
      title: '5 Tahun Tanpa Masjid, 164 Warga Ibadah di Lapangan',
      organization: 'Masjid Nusantara',
      isVerified: true,
      amount: 'Rp1.122.788.058',
      daysLeft: 12,
    },
    {
      image: 'https://example.com/banjir-image.jpg',
      title: 'Solidaritas Bantu Korban Banjir Bandang Ternate!',
      organization: 'Jagabersama',
      isVerified: true,
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-4">
        <div className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded inline-block mb-3">
          REKOMENDASI
        </div>

        {campaigns.map((campaign, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="font-semibold text-sm mb-1">{campaign.title}</h3>
            <div className="flex items-center text-xs text-gray-600 mb-2">
              <span>{campaign.organization}</span>
              {campaign.isVerified && (
                <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="bg-blue-100 w-full h-2 rounded-full mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="flex justify-between text-xs">
              <span>Terkumpul</span>
              {campaign.daysLeft && <span>Sisa hari</span>}
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span>{campaign.amount}</span>
              {campaign.daysLeft && <span>{campaign.daysLeft}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
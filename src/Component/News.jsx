import React from 'react';

const News = () => {
  const campaigns = [
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76fb9c38-0999-414c-a382-eb0f40ba6db0.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'URGENT! Asap Tebal Kebakaran Hutan Kepung kalbar!',
      organization: 'BAZNAS Hub',
      isVerified: true,
      amount: 'Rp328.819.871',
      daysLeft: 92,
    },
    {
      image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1e92a184-ee77-4bad-9aa3-d9ed0dc1b031.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
      title: 'Solidaritas Bantu Korban Banjir Bandang Ternate!',
      organization: 'Jagabersama',
      isVerified: true,
      amount: 'Rp135.651.866',
      daysLeft: 1,
    },
    {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fb3303ca8-0ca2-4f61-b730-97c4f8ef2041.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75',
        title: '5 Tahun Tanpa Masjid, 164 Warga Ibadah di Lapangan',
        organization: 'Masjid Nusantara',
        isVerified: true,
        amount: 'Rp1.123.222.058',
        daysLeft: 11,
      },
  ];

  return (
    <div className="max-w-md mx-auto bg-sky-100 p-4">
      <div className="bg-sky-100 rounded-lg p-4">
        <div className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded inline-block mb-3">
          REKOMENDASI
        </div>

        {campaigns.map((campaign, index) => (
          <div key={index} className="mb-4 last:mb-0 flex bg-sky-100 rounded-lg shadow-sm overflow-hidden">
            <button className="w-2/4 flex-shrink-0 p-2">
              <img src={campaign.image} alt={campaign.title} className="w-full h-20 object-cover rounded" />
            </button>
            <div className="w-4/4 p-2">
              <h3 className="font-semibold text-xs mb-1 line-clamp-2">{campaign.title}</h3>
              <div className="flex items-center text-xs text-gray-600 mb-1">
                <span>{campaign.organization}</span>
                {campaign.isVerified && (
                  <svg className="w-2 h-2 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="bg-blue-100 w-full h-1 rounded-full mb-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>Terkumpul</span>
                {campaign.daysLeft && <span>Sisa hari</span>}
              </div>
              <div className="flex justify-between text-xs font-semibold">
                <span>{campaign.amount}</span>
                {campaign.daysLeft && <span>{campaign.daysLeft}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
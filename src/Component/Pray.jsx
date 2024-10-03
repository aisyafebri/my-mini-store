import React from 'react';

const Pray = ({ name, time, prayerText, likes, onAmin }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-4">
        <h2  className="text-lg font-bold mb-4">Doa-Doa #Orang Baik</h2>
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-gray-500">{time} lalu</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{prayerText}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">{likes} orang mengaminkan doa ini</p>
        <button
          className="text-blue-500 hover:text-blue-600 font-semibold"
          onClick={onAmin}
        >
          Aamiin
        </button>
      </div>
    </div>
    </div>
  );
};

const prayers = () => {
  const Pray = [
    {
      name: 'Cherah Pepita',
      time: '2 jam',
      prayerText: 'Our God Jehovah Rapha will heal you Abigail',
      likes: 2,
    },
    {
      name: 'Anonim',
      time: '2 jam',
      prayerText: 'semoga Allah mengampuni dosa-dosa umat muslim',
      likes: 5,
    },
  ];

  const handleAminClick = (index) => {
    console.log(`Doa ke-${index + 1} diaminkan!`);
  };

  return (
    <div className="flex space-x-4">
      {Pray.map((Pray, index) => (
        <Pray
          key={index}
          name={Pray.name}
          time={Pray.time}
          prayerText={Pray.prayerText}
          likes={Pray.likes}
          onAmin={() => handleAminClick(index)}
        />
      ))}
    </div>
  );
};

export default Pray;

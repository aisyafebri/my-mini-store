import React from "react";

const NewsPenggalangan = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-left mb-4">
        Penggalangan Dana Mendesak
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm mx-auto scale-60 h-72">
        {/* Kartu Pertama */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="relative">
            <img
              src="https://link-to-your-first-image.png" // Ganti URL ini dengan gambar pertama
              alt="Pengobatan Terhenti"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
              98 hari lagi
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-orange-600 text-sm font-bold leading-snug">
              Pengobatan Terhenti Karena Keterbatasan Biaya!
            </h3>
            <p className="text-gray-700 mt-1 text-sm">
              Bantu Para Lansia Dhuafa Bisa Lanjutkan Berobat di RS
            </p>
            <div className="flex items-center mt-3">
              <span className="text-blue-600 font-semibold">CollabForChange</span>
              <span className="text-blue-500 ml-1">✔️</span>
            </div>
            <p className="text-gray-500 text-sm">Gotong Royong Bantu Lanjutkan Pengobatan Lansia Dhuafa</p>
            <p className="text-blue-600 text-xl font-bold mt-2">
              Terkumpul Rp57.019.495
            </p>
            <div className="bg-gray-200 h-2 rounded mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>

        {/* Kartu Kedua */}
        <div className="bg-white rounded-lg shadow-md p-4 ">
          <div className="relative">
            <img
              src="https://link-to-your-second-image.png" // Ganti URL ini dengan gambar kedua
              alt="Usia 10 Tahun"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
              63 hari lagi
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-orange-600 text-sm font-bold leading-snug">
              Usia 10 Tahun Bobot Hanya 11.5 Kg
            </h3>
            <p className="text-gray-700 mt-1 text-sm">
              Bantu Dek Hazizah Lawan Sakit Langka!
            </p>
            <div className="flex items-center mt-3">
              <span className="text-blue-600 font-semibold">munir</span>
              <span className="text-blue-500 ml-1">✔️</span>
            </div>
            <p className="text-gray-500 text-sm">Tubuh Kecil, Tulang Rapuh, Bantu Hazizah Sehat!</p>
            <p className="text-blue-600 text-xl font-bold mt-2">
              Terkumpul Rp22.547.000
            </p>
            <div className="bg-gray-200 h-2 rounded mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPenggalangan;

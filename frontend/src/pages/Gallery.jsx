import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/galeri") // Ganti dengan URL endpoint API Anda
      .then((res) => res.json())
      .then((data) => {
        console.log("Data galeri:", data);
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat galeri:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-[#f7f3e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#434f2a] mb-4">Galeri</h2>
          <p className="text-[#205e2e] italic text-lg">Kumpulan momen spesial bersama Dandanggulo</p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 bg-[#434f2a] mx-2"></div>
            <div className="w-8 h-0.5 bg-[#434f2a] mx-2"></div>
            <div className="w-4 h-0.5 bg-[#434f2a] mx-2"></div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Memuat galeri...</p>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada gambar yang ditampilkan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="overflow-hidden rounded-lg shadow-md group">
                {img.url ? (
                  <img
                    src={img.url}
                    alt={`Galeri ${img.id}`}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                    Gambar tidak tersedia
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { getGalleries } from "../services/api";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedImageData, setSelectedImageData] = useState(null);

  useEffect(() => {
    getGalleries()
      .then((res) => {
        setImages(res.data.data ?? res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat galeri:", err);
        setLoading(false);
      });
  }, []);

  const openPreview = (img) => {
    setPreviewImage(`http://127.0.0.1:8000/storage/${img.path_image}`);
    setSelectedImageData(img);
  };

  const closePreview = () => {
    setPreviewImage(null);
    setSelectedImageData(null);
  };

  return (
    <section className="py-24 relative" style={{ backgroundColor: '#f8f5f0' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-wide" style={{ color: '#4a5d3a' }}>Galeri</h2>
          <p className="text-[#205e2e] italic text-lg font-light">Kumpulan Momen Spesial Bersama Dandanggulo</p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 mx-2" style={{ backgroundColor: '#5d7c47' }}></div>
            <div className="w-8 h-0.5 mx-2" style={{ backgroundColor: '#5d7c47' }}></div>
            <div className="w-4 h-0.5 mx-2" style={{ backgroundColor: '#5d7c47' }}></div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Memuat galeri...</p>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada gambar yang ditampilkan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {images.map((img) => (
              <div
                key={img.id_gallery}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openPreview(img)}
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${img.path_image}`}
                  alt={img.name_event || `Galeri ${img.id_gallery}`}
                  className="w-full h-32 object-cover transform group-hover:scale-105 transition duration-300"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition">
                  {img.name_event} {img.date && `| ${img.date}`}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Preview dengan Detail */}
      {previewImage && selectedImageData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closePreview}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header dengan tombol close */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closePreview}
                className="bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Gambar */}
              <div className="lg:w-2/3 relative">
                <img
                  src={previewImage}
                  alt={selectedImageData.name_event || `Galeri ${selectedImageData.id_gallery}`}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>

              {/* Detail Informasi */}
              <div className="lg:w-1/3 p-6 bg-gray-50">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#4a5d3a' }}>
                  Galeri
                </h3>
                
                <div className="space-y-4">
                  {selectedImageData.name_event && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Nama Event
                      </label>
                      <p className="text-gray-800 bg-white p-2 rounded border">
                        {selectedImageData.name_event}
                      </p>
                    </div>
                  )}

                  {selectedImageData.date && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Tanggal
                      </label>
                      <p className="text-gray-800 bg-white p-2 rounded border">
                        {new Date(selectedImageData.date).toLocaleDateString('id-ID', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}

                  {selectedImageData.description && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Deskripsi
                      </label>
                      <p className="text-gray-800 bg-white p-2 rounded border">
                        {selectedImageData.description}
                      </p>
                    </div>
                  )}

                  {selectedImageData.location && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Lokasi
                      </label>
                      <p className="text-gray-800 bg-white p-2 rounded border">
                        {selectedImageData.location}
                      </p>
                    </div>
                  )}

                  {selectedImageData.photographer && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Fotografer
                      </label>
                      <p className="text-gray-800 bg-white p-2 rounded border">
                        {selectedImageData.photographer}
                      </p>
                    </div>
                  )}
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
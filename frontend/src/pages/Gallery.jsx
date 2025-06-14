import { useEffect, useState } from "react";
import { getGalleries, BASE_IMAGE_URL } from "../services/api";

export default function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewGallery, setPreviewGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    getGalleries()
      .then((res) => {
        setGalleries(res.data.data ?? res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat galeri:", err);
        setLoading(false);
      });
  }, []);

  const openPreview = (gallery) => {
    setPreviewGallery(gallery);
    setCurrentImageIndex(0); // Reset to first image when opening preview
  };

  const closePreview = () => {
    setPreviewGallery(null);
    setCurrentImageIndex(0); // Reset index when closing
  };

  const nextImage = () => {
    if (previewGallery && previewGallery.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === previewGallery.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (previewGallery && previewGallery.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? previewGallery.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="py-24 pt-20 relative min-h-screen bg-gradient-to-br from-[#fefdf8] to-[#f8f6f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-wide" style={{ color: '#4a5d3a' }}>Galeri</h2>
          <p className="text-[#205e2e] italic text-lg font-light">Kumpulan Momen Spesial Bersama Dandanggulo</p>
          <div className="flex justify-center mt-6">
                        <div className="w-20 h-0.5 bg-[#434f2a] mx-2"></div>
                        <div className="w-8 h-0.5 bg-[#434f2a] mx-2"></div>
                        <div className="w-4 h-0.5 bg-[#434f2a] mx-2"></div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Memuat galeri...</p>
        ) : galleries.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada gambar yang ditampilkan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {galleries.map((gallery) => {
              const coverImage = gallery.images?.[0]?.path_image;
              return (
                <div
                  key={gallery.id_gallery}
                  className="flex flex-col overflow-hidden rounded-lg shadow-md cursor-pointer bg-white transition-transform transform hover:scale-105"
                  onClick={() => openPreview(gallery)}
                >
                  <img
                    src={
                      coverImage
                        ? `${BASE_IMAGE_URL}${coverImage}`
                        : "https://via.placeholder.com/400x300/5d7c47/ffffff?text=No+Image"
                    }
                    alt={gallery.name_event || `Galeri ${gallery.id_gallery}`}
                    className="w-full h-56 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300/5d7c47/ffffff?text=No+Image";
                    }}
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    {gallery.name_event && (
                      <p className="text-lg font-semibold text-gray-800 mb-1">{gallery.name_event}</p>
                    )}
                    {gallery.date && (
                      <p className="text-sm text-gray-500">
                        {new Date(gallery.date).toLocaleDateString('id-ID', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal Preview */}
{previewGallery && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
    onClick={closePreview}
  >
    <div
      className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6"
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

      {/* Slider Gambar */}
      {previewGallery.images && previewGallery.images.length > 0 ? (
        <div className="relative w-full flex items-center justify-center" style={{ height: '75vh' }}>
          <img
            src={`${BASE_IMAGE_URL}${previewGallery.images[currentImageIndex].path_image}`}
            alt={`Image ${previewGallery.images[currentImageIndex].id_image}`}
            className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x300/5d7c47/ffffff?text=No+Image";
            }}
          />
          {/* Navigation Buttons */}
          {previewGallery.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition text-xl"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition text-xl"
              >
                →
              </button>
            </>
          )}
          {/* Image Counter */}
          <div className="absolute bottom-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} / {previewGallery.images.length}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center h-[75vh] flex items-center justify-center">
          Tidak ada gambar.
        </p>
      )}
    </div>
  </div>
)}

    </section>
  );
}
import { useEffect, useState } from "react";
import { getPortfolios, BASE_IMAGE_URL } from "../services/api";

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewPortfolio, setPreviewPortfolio] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    getPortfolios()
      .then((res) => {
        setPortfolios(res.data.data ?? res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat portfolio:", err);
        setLoading(false);
      });
  }, []);

  const openPreview = (portfolio) => {
    setPreviewPortfolio(portfolio);
    setCurrentImageIndex(0);
  };

  const closePreview = () => {
    setPreviewPortfolio(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (previewPortfolio && previewPortfolio.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === previewPortfolio.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (previewPortfolio && previewPortfolio.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? previewPortfolio.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="py-24 pt-20 relative min-h-screen bg-gradient-to-br from-[#fefdf8] to-[#f8f6f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-wide" style={{ color: '#4a5d3a' }}>Portofolio</h2>
          <p className="text-[#205e2e] italic text-lg font-light">Dokumentasi Aktivitas dan Momen Terbaik Kami</p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 mx-2" style={{ backgroundColor: '#5d7c47' }}></div>
            <div className="w-8 h-0.5 mx-2" style={{ backgroundColor: '#5d7c47' }}></div>
            <div className="w-4 h-0.5 mx-2" style={{ backgroundColor: '#5d7c47' }}></div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Memuat portofolio...</p>
        ) : portfolios.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada data portofolio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolios.map((portfolio) => {
              const coverImage = portfolio.images?.[0]?.path_image;
              return (
                <div
                  key={portfolio.id_portfolio}
                  className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
                  onClick={() => openPreview(portfolio)}
                >
                  <img
                    src={
                      coverImage
                        ? `${BASE_IMAGE_URL}${coverImage}`
                        : "https://via.placeholder.com/400x300/5d7c47/ffffff?text=No+Image"
                    }
                    alt={portfolio.name_activity || `Portfolio ${portfolio.id_portfolio}`}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300/5d7c47/ffffff?text=No+Image";
                    }}
                  />
                  <div className="p-4">
                    {portfolio.name_activity && (
                      <p className="text-lg font-semibold text-gray-800 mb-2">{portfolio.name_activity}</p>
                    )}
                    {portfolio.description && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-3">{portfolio.description}</p>
                    )}
                    {portfolio.date_activity && (
                      <p className="text-xs text-gray-500">
                        {new Date(portfolio.date_activity).toLocaleDateString('id-ID', {
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
      {previewPortfolio && (
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

            {/* Slider Gambar Full */}
            <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
              {previewPortfolio.images && previewPortfolio.images.length > 0 ? (
                <>
                  <img
                    src={`${BASE_IMAGE_URL}${previewPortfolio.images[currentImageIndex].path_image}`}
                    alt={`Image ${previewPortfolio.images[currentImageIndex].id_image}`}
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300/5d7c47/ffffff?text=No+Image";
                    }}
                  />
                  {/* Navigation Buttons */}
                  {previewPortfolio.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition"
                      >
                        →
                      </button>
                    </>
                  )}
                  {/* Image Counter */}
                  <div className="absolute bottom-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {previewPortfolio.images.length}
                  </div>
                </>
              ) : (
                <p className="text-gray-500 text-center h-[80vh] flex items-center justify-center">
                  Tidak ada gambar.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

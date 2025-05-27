import { useEffect, useState } from "react";
import { getGalleries } from "../services/api";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

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

  return (
    <section className="py-24 bg-[#f7f3e8] relative">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {images.map((img) => (
              <div
                key={img.id_gallery}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setPreviewImage(`http://127.0.0.1:8000/storage/${img.path_image}`)}
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

      {/* Modal Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      )}
    </section>
  );
}

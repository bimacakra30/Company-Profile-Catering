import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, BASE_IMAGE_URL } from "../services/api";

export default function MenuByCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getProducts();
        const allProducts = response.data.products;

        const filtered = allProducts.filter(
          item =>
            item.category?.name_category
              ?.toLowerCase()
              .replace(/\s+/g, "-") === slug
        );

        setProducts(filtered);
      } catch (err) {
        console.error("Gagal memuat data:", err);
        setError("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const titleCase = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefdf8] to-[#f8f6f0]" style={{ backgroundColor: '#f8f5f0' }}>
      {/* Header dengan warna background yang sama seperti website */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#434f2a] mb-4 tracking-wide" style={{ color: '#4a5d3a' }}>
            {titleCase(slug)}
          </h1>
          <p className="text-[#205e2e] italic text-lg font-light max-w-2xl mx-auto">
            Nikmati Koleksi Menu {titleCase(slug)} Terbaik dari Dandanggulo Catering dengan Cita Rasa yang Tak Terlupakan
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#5d7c47' }}></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 mb-4" style={{ borderColor: '#5d7c47' }}></div>
            <p className="text-gray-600">Memuat menu terlezat untuk Anda...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-700 text-center">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-md">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Menu Sedang Dalam Persiapan</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Belum ada menu di kategori {titleCase(slug).toLowerCase()} saat ini.
              Silakan cek kategori lain atau hubungi kami untuk menu khusus.
            </p>
            <button
              className="px-6 py-3 text-white rounded-lg font-medium transition-colors duration-300 hover:opacity-90"
              style={{ backgroundColor: '#5d7c47' }}
            >
              Hubungi Kami
            </button>
          </div>
        ) : (
          <>
            {/* Info produk */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-2" style={{ color: '#4a5d3a' }}>
                {products.length} Menu Tersedia
              </h2>
              <p className="text-gray-600">Pilih menu favorit Anda untuk acara istimewa</p>
            </div>

            {/* Grid Menu */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id_product}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* Gambar */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={product.path_image ? `${BASE_IMAGE_URL}${product.path_image}` : "https://via.placeholder.com/400x300/5d7c47/ffffff?text=Dandanggulo+Menu"}
                      alt={product.name_product}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => openModal(product)}
                      onError={(e) => {
                        console.warn("Failed to load image:", e.target.src);
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x300/5d7c47/ffffff?text=Dandanggulo+Menu";
                      }}

                    />
                    {/* Price overlay */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg"
                      style={{ backgroundColor: '#5d7c47' }}>
                      Rp {Number(product.price_product).toLocaleString("id-ID", {
                        minimumFractionDigits: 0,
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#4a5d3a' }}>
                      {product.name_product}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {product.description || "Menu lezat dengan bahan berkualitas tinggi"}
                    </p>
                    {/* View Details Button */}
                    <button
                      onClick={() => openModal(product)}
                      className="mt-4 text-sm font-medium transition-colors duration-300 hover:underline"
                      style={{ color: '#5d7c47' }}
                    >
                      Lihat Detail →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-12 text-center">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4a5d3a' }}>
                Ingin Memesan Menu Ini?
              </h3>
              <p className="text-gray-600 mb-4 max-w-xl mx-auto text-sm">
                Hubungi kami sekarang untuk konsultasi menu, paket catering, atau pemesanan khusus.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6285790220407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#5d7c47' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Kami
                </a>
                <a
                  href="/kontak"
                  className="inline-flex items-center justify-center px-5 py-2.5 border-2 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-10"
                  style={{
                    borderColor: '#5d7c47',
                    color: '#5d7c47'
                  }}
                >
                  Lihat Kontak Lengkap
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal untuk gambar menu */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex-shrink-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl">
              <h3 className="text-xl font-bold" style={{ color: '#4a5d3a' }}>
                Detail Menu
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Gambar */}
                  <div className="space-y-4">
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={selectedProduct.path_image ? `${BASE_IMAGE_URL}${selectedProduct.path_image}` : "https://via.placeholder.com/600x450/5d7c47/ffffff?text=Dandanggulo+Menu"}
                        alt={selectedProduct.name_product}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/600x450/5d7c47/ffffff?text=Dandanggulo+Menu";
                        }}
                        onLoad={(e) => {
                          e.target.style.opacity = '1';
                        }}
                        style={{ opacity: '0', transition: 'opacity 0.3s ease' }}
                      />
                    </div>
                  </div>

                  {/* Detail Menu */}
                  <div className="space-y-6">
                    {/* Nama Menu */}
                    <div>
                      <h2 className="text-2xl font-bold mb-2" style={{ color: '#4a5d3a' }}>
                        {selectedProduct.name_product}
                      </h2>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                          {selectedProduct.category?.name_category || 'Menu Utama'}
                        </span>
                      </div>
                    </div>

                    {/* Harga */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Harga</p>
                      <p className="text-2xl font-bold" style={{ color: '#5d7c47' }}>
                        Rp {Number(selectedProduct.price_product).toLocaleString("id-ID", {
                          minimumFractionDigits: 0,
                        })}
                      </p>
                    </div>

                    {/* Deskripsi */}
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: '#4a5d3a' }}>
                        Deskripsi Menu
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProduct.description ||
                          `${selectedProduct.name_product} adalah salah satu menu unggulan kami yang diolah dengan bahan-bahan berkualitas tinggi dan bumbu pilihan. Menu ini cocok untuk berbagai acara dan akan memberikan cita rasa yang tak terlupakan bagi Anda dan keluarga.`}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4 border-t">
                      <a
                        href={`https://wa.me/6285790220407?text=Halo, saya tertarik dengan menu ${selectedProduct.name_product} seharga Rp ${Number(selectedProduct.price_product).toLocaleString("id-ID")}. Mohon informasi lebih lanjut.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-white rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                        style={{ backgroundColor: '#5d7c47' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Pesan via WhatsApp
                      </a>

                      <button
                        onClick={closeModal}
                        className="w-full px-4 py-3 border-2 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-10"
                        style={{
                          borderColor: '#5d7c47',
                          color: '#5d7c47'
                        }}
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
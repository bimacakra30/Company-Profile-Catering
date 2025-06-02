import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaUtensils,
  FaLeaf,
  FaStar,
} from "react-icons/fa";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Ganti dengan API endpoint kategori Anda
        const response = await fetch('/api/categories'); // Sesuaikan dengan endpoint Anda
        const data = await response.json();
        
        // Ambil maksimal 6 kategori untuk tampilan yang rapi
        const limitedCategories = data.slice(0, 6);
        setCategories(limitedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback ke kategori default jika API gagal
        setCategories([
          { name_category: "Prasmanan" },
          { name_category: "Nasi Box" },
          { name_category: "Hampers" },
          { name_category: "Dessert" },
          { name_category: "Snack Box" },
          { name_category: "Paket Rapat" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* KIRI - Info */}
        <div className="md:col-span-5 space-y-2">
          <div className="flex items-center space-x-2">
            <FaUtensils className="text-lg" />
            <h2 className="text-lg font-bold font-serif">Dandanggulo Catering</h2>
          </div>
          <p className="text-white/90 text-sm leading-snug font-serif">
            Selalu berkomitmen menghadirkan hidangan rumahan yang lezat dan penuh kehangatan.
          </p>
          <div className="flex items-center space-x-2 text-white/80 text-xs">
            <FaLeaf />
            <span>Bahan Pilihan & Halal</span>
            <FaHeart className="animate-pulse" />
          </div>
          <div className="flex space-x-2 pt-1">
            <div className="flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/20 text-xs">
              <FaStar />
              <span>Premium</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/20 text-xs">
              <FaHeart />
              <span>With Love</span>
            </div>
          </div>
        </div>

        {/* TENGAH - Menu Kategori */}
        <div className="md:col-span-3 space-y-2">
          <h3 className="text-base font-bold flex items-center font-serif mb-1">
            <FaUtensils className="mr-2" />
            Menu Tersedia
          </h3>
          <div className="flex flex-wrap gap-2">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white/10 px-3 py-1 rounded-full animate-pulse h-6 w-16"></div>
              ))
            ) : (
              categories.map((category, index) => (
                <span 
                  key={index} 
                  className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-xs hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    // Navigate ke halaman kategori
                    const slug = category.name_category?.toLowerCase().replace(/\s+/g, "-");
                    window.location.href = `/menu/${slug}`;
                  }}
                >
                  {category.name_category}
                </span>
              ))
            )}
          </div>
          {!loading && categories.length > 6 && (
            <p className="text-white/70 text-xs italic">
              dan kategori lainnya...
            </p>
          )}
        </div>

        {/* KANAN - Kontak */}
        <div className="md:col-span-4 space-y-2">
          <h3 className="text-base font-bold flex items-center font-serif mb-1">
            <FaEnvelope className="mr-2" />
            Hubungi Kami
          </h3>

          <div className="space-y-1 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-base" />
              <span>0857 9022 0407</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-base" />
              <span>0857 9022 0407</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-base" />
              <span>@dandanggulo.crb</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-base" />
              <span>\@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-base mt-1" />
              <span className="leading-snug">
                Jl. Cisadane, Pereng, Mejayan<br />
                Kec. Mejayan, Kab. Madiun, Jawa Timur 63153
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 text-xs py-2 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-1 text-white/80 mb-1 md:mb-0">
          <span>Made with</span>
          <FaHeart className="text-white animate-pulse" />
          <span>in Madiun</span>
        </div>
        <div className="text-white/80 text-right">
          <p>© 2025 <span className="font-semibold text-white font-serif">Dandanggulo Catering</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
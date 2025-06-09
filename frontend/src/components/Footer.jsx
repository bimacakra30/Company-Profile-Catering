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
import { getCategories } from "../services/api"; // gunakan service yang sama

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Gagal memuat kategori:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  return (
    <footer className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Info */}
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

        {/* Menu Tersedia */}
        <div className="md:col-span-3 space-y-2">
          <h3 className="text-base font-bold flex items-center font-serif mb-1">
            <FaUtensils className="mr-2" />
            Menu Tersedia
          </h3>
          <div className="flex flex-wrap gap-2">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-full animate-pulse h-6 w-16"
                ></div>
              ))
            ) : (
              categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-xs hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/menu/${slugify(category.name_category)}`)
                  }
                >
                  {category.name_category}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Kontak */}
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
              <span>@gmail.com</span>
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
          <p>
            © 2025 <span className="font-semibold text-white font-serif">Dandanggulo Catering</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

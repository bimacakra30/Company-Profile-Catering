import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../services/api";
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
  FaStar
} from "react-icons/fa";

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Gagal mengambil kategori:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="relative bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Informasi Perusahaan */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 p-3 rounded-full">
                <FaUtensils className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-white">Dandanggulo</h2>
            </div>
            <p className="text-white/90 leading-relaxed text-lg font-serif">
              Selalu berkomitmen menghadirkan hidangan rumahan yang lezat dan penuh kehangatan.
              Dimasak dengan sepenuh hati oleh keluarga kami.
            </p>
            <div className="flex items-center space-x-2 text-white/80">
              <FaLeaf className="text-white" />
              <span className="font-semibold">Bahan pilihan, halal, dan berkualitas</span>
              <FaHeart className="text-white animate-pulse" />
            </div>
            <div className="flex space-x-4 pt-4">
              <div className="flex items-center space-x-1 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <FaStar className="text-white" />
                <span className="text-sm font-medium text-white">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <FaHeart className="text-white" />
                <span className="text-sm font-medium text-white">Made with Love</span>
              </div>
            </div>
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4 text-white font-serif">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="group bg-white/10 p-4 rounded-full hover:bg-white hover:text-[#434f2a] transition-all">
                  <FaFacebookF className="text-xl" />
                </a>
                <a href="#" className="group bg-white/10 p-4 rounded-full hover:bg-white hover:text-[#434f2a] transition-all">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Paket Layanan */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-serif">
              <FaUtensils className="mr-3 text-white" />
              Paket Layanan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat, index) => (
                <Link
                  key={cat.id_category}
                  to={`/menu/${cat.name_category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center space-x-3 p-3 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg border border-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/90 group-hover:text-white transition-colors font-medium">
                    {cat.name_category}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-serif">
              <FaEnvelope className="mr-3 text-white" />
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <a href="https://wa.me/6285106511818" className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition">
                <div className="bg-green-500 p-3 rounded-full group-hover:bg-green-400 transition">
                  <FaWhatsapp className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-white/80">0851 0651 1818</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaPhoneAlt className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telepon</p>
                  <p className="text-white/80">(0274) 865829</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaInstagram className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <p className="text-white/80">@saridewicatering_jogja</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-white/80 text-sm">cvsaridewimalika22@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10">
                <div className="bg-white/20 p-3 rounded-full mt-1">
                  <FaMapMarkerAlt className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Alamat</p>
                  <p className="text-white/80 text-sm">
                    Jl. Magelang KM.10, Josari, Tridadi<br />
                    Kec. Sleman, Kab. Sleman<br />
                    DIY 55511
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/80">
              <span>Made with</span>
              <FaHeart className="text-white animate-pulse" />
              <span>in Yogyakarta</span>
            </div>
            <div className="text-white/80 text-center md:text-right">
              <p>© 2025 <span className="font-semibold text-white font-serif">Dandanggulo Catering</span></p>
              <p className="text-sm text-white/60">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

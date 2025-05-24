import React from "react";
import { Link } from "react-router-dom";
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
  const categories = [
    { name: "Prasmanan", slug: "prasmanan" },
    { name: "Gubug", slug: "gubug" },
    { name: "Nasi Box", slug: "nasi-box" },
    { name: "Hampers", slug: "hampers" },
    { name: "Menu Spesial", slug: "menu-spesial" },
    { name: "Racikan", slug: "racikan" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full"></div>
      </div>

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <FaUtensils className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-white">
                Dandanggulo
              </h2>
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
            {/* Quality Badges */}
            <div className="flex space-x-4 pt-4">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FaStar className="text-white" />
                <span className="text-sm font-medium text-white">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FaHeart className="text-white" />
                <span className="text-sm font-medium text-white">Made with Love</span>
              </div>
            </div>
            {/* Social Media */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4 text-white font-serif">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="group bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white hover:text-[#434f2a] transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/20"
                >
                  <FaFacebookF className="text-xl transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="group bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white hover:text-[#434f2a] transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/20"
                >
                  <FaInstagram className="text-xl transition-colors" />
                </a>
              </div>
            </div>
          </div>
          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-serif">
              <FaUtensils className="mr-3 text-white" />
              Paket Layanan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat, index) => (
                <Link 
                  key={cat.slug}
                  to={`/menu/${cat.slug}`}
                  className="group flex items-center space-x-3 p-3 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg border border-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/90 group-hover:text-white transition-colors font-medium">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-serif">
              <FaEnvelope className="mr-3 text-white" />
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/6285106511818" 
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/10"
              >
                <div className="bg-green-500 p-3 rounded-full group-hover:bg-green-400 transition-colors shadow-lg">
                  <FaWhatsapp className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-white/80 group-hover:text-white transition-colors">0851 0651 1818</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="bg-white/20 p-3 rounded-full shadow-lg">
                  <FaPhoneAlt className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telepon</p>
                  <p className="text-white/80">(0274) 865829</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="bg-white/20 p-3 rounded-full shadow-lg">
                  <FaInstagram className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <p className="text-white/80">@saridewicatering_jogja</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="bg-white/20 p-3 rounded-full shadow-lg">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-white/80 text-sm">cvsaridewimalika22@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="bg-white/20 p-3 rounded-full mt-1 shadow-lg">
                  <FaMapMarkerAlt className="text-xl text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Alamat</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Jl. Magelang KM.10, Josari, Tridadi<br />
                    Kec. Sleman, Kab. Sleman<br />
                    DIY 55511
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/80">
              <span>Made with</span>
              <FaHeart className="text-white animate-pulse" />
              <span>in Yogyakarta</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80">
                © 2025 <span className="font-semibold text-white font-serif">Dandanggulo Catering</span>
              </p>
              <p className="text-sm text-white/60">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
    </footer>
  );
};

export default Footer;
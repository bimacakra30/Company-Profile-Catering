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
  return (
    <footer className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* KIRI - Info */}
        <div className="md:col-span-5 space-y-2">
          <div className="flex items-center space-x-2">
            <FaUtensils className="text-lg" />
            <h2 className="text-lg font-bold font-serif">Dandanggulo</h2>
          </div>
          <p className="text-white/90 text-sm leading-snug font-serif">
            Selalu berkomitmen menghadirkan hidangan rumahan yang lezat dan penuh kehangatan.
          </p>
          <div className="flex items-center space-x-2 text-white/80 text-xs">
            <FaLeaf />
            <span>Bahan pilihan & halal</span>
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

        {/* TENGAH - Paket Layanan */}
        <div className="md:col-span-3 space-y-2">
          <h3 className="text-base font-bold flex items-center font-serif mb-1">
            <FaUtensils className="mr-2" />
            Paket Layanan
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Prasmanan", "Nasi Box", "Hampers"].map((item) => (
              <span key={item} className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-xs">
                {item}
              </span>
            ))}
          </div>
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
              <span>0851 0651 1818</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-base" />
              <span>(0274) 865829</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-base" />
              <span>@saridewicatering_jogja</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-base" />
              <span>cvsaridewimalika22@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-base mt-1" />
              <span className="leading-snug">
                Jl. Magelang KM.10, Josari, Tridadi<br />
                Kec. Sleman, Kab. Sleman, DIY 55511
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
          <span>in Yogyakarta</span>
        </div>
        <div className="text-white/80 text-right">
          <p>© 2025 <span className="font-semibold text-white font-serif">Dandanggulo Catering</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

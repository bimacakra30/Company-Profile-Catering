import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const layananItems = [
    { label: "Paket Prasmanan", path: "/layanan/prasmanan" },
    { label: "Paket Gubug", path: "/layanan/gubug" },
    { label: "Paket Nasi Box", path: "/layanan/nasi-box" },
    { label: "Paket Racikan", path: "/layanan/racikan" },
    { label: "Paket Menu Spesial", path: "/layanan/menu-spesial" },
  ];

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Layanan Catering", submenu: layananItems },
    { label: "Galeri", path: "/galeri" },
    { label: "Ulasan", path: "/ulasan" },
    { label: "Portofolio", path: "/portofolio" },
    { label: "Kontak", path: "/kontak" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-serif text-2xl font-light tracking-wider text-[#434f2a]"
        >
          DANDANG GULO CATERING
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-serif relative">
          {menuItems.map(({ label, path, submenu }) =>
            submenu ? (
              <div key={label} className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#434f2a] transition-colors duration-300">
                  {label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 bg-white border rounded-none shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 min-w-[220px] z-50">
                  {submenu.map(({ label: subLabel, path: subPath }) => (
                    <Link
                      key={subLabel}
                      to={subPath}
                      className="block px-6 py-3 text-base text-black hover:bg-[#f4f4f4] hover:text-[#205e2e] transition"
                      style={{ textTransform: "none" }}
                    >
                      {subLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={label}
                to={path}
                className="text-gray-700 hover:text-[#434f2a] transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#9aad5d] group-hover:w-full transition-all duration-300"></span>
              </Link>
            )
          )}
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Whatsapp
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#434f2a] focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 font-serif border-t border-[#dcfce7] animate-slide-down">
          {menuItems.map(({ label, path, submenu }) =>
            submenu ? (
              <div key={label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-between items-center w-full py-3 text-gray-700 hover:text-[#434f2a] border-t border-[#f0faf0]"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="pl-4">
                    {submenu.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        to={subPath}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-gray-700 hover:text-[#434f2a]"
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-[#434f2a] transition-colors duration-300 border-t border-[#f0faf0] first:border-none"
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
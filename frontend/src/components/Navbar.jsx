import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getCategories } from "../services/api"; // sesuaikan pathnya
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [layananItems, setLayananItems] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getCategories();
        setLayananItems(response.data); // langsung array dari API
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami", path: "/tentang" },
    {
      label: "Layanan Catering",
      submenu: layananItems.map(cat => ({
        label: cat.name_category,
        path: `/layanan/${slugify(cat.name_category)}`,
      })),
    },
    { label: "Galeri", path: "/galeri" },
    { label: "Ulasan", path: "/ulasan" },
    { label: "Portofolio", path: "/portofolio" },
    { label: "Kontak", path: "/kontak" },
  ];

  function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  }

  return (
    <header className={`bg-white/95 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className={`font-serif font-bold tracking-wide text-[#434f2a] hover:text-[#205e2e] transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}
        >
          DANDANG GULO CATERING
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-4 font-serif relative">
          {menuItems.map(({ label, path, submenu }) =>
            submenu ? (
              <div key={label} className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#434f2a] transition-all duration-300 font-medium py-2 px-2 rounded-lg hover:bg-[#f7f3e8]/50 text-sm whitespace-nowrap">
                  {label}
                  <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 min-w-[220px] z-50 overflow-hidden">
                  <div className="p-2">
                    {submenu.map(({ label: subLabel, path: subPath }, index) => (
                      <Link
                        key={subLabel}
                        to={subPath}
                        className="block px-3 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-[#f7f3e8] hover:to-[#434f2a]/5 hover:text-[#205e2e] transition-all duration-300 rounded-xl font-medium hover:shadow-sm hover:transform hover:translate-x-1 text-sm"
                        style={{ 
                          textTransform: "none",
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <span className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#434f2a] rounded-full mr-2 opacity-60"></span>
                          {subLabel}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={label}
                to={path}
                className="text-gray-700 hover:text-[#434f2a] transition-all duration-300 relative group font-medium py-2 px-2 rounded-lg hover:bg-[#f7f3e8]/50 text-sm whitespace-nowrap"
              >
                {label}
                <span className="absolute left-2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#434f2a] to-[#205e2e] group-hover:w-[calc(100%-16px)] transition-all duration-300 rounded-full"></span>
              </Link>
            )
          )}
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-4 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm whitespace-nowrap"
        >
          <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
          </svg>
          WhatsApp
        </a>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#434f2a] focus:outline-none p-2 rounded-lg hover:bg-[#f7f3e8]/50 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md px-4 pb-4 font-serif border-t border-gray-100 animate-slide-down shadow-lg">
          {menuItems.map(({ label, path, submenu }) =>
            submenu ? (
              <div key={label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-between items-center w-full py-4 text-gray-700 hover:text-[#434f2a] border-t border-gray-100 first:border-none transition-colors font-medium hover:bg-[#f7f3e8]/30 px-2 rounded-lg"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 animate-slide-down">
                    {submenu.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        to={subPath}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center py-3 text-gray-600 hover:text-[#434f2a] transition-colors hover:bg-[#f7f3e8]/30 px-2 rounded-lg"
                      >
                        <span className="w-1.5 h-1.5 bg-[#434f2a] rounded-full mr-3 opacity-60"></span>
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
                className="block py-4 text-gray-700 hover:text-[#434f2a] transition-colors duration-300 border-t border-gray-100 first:border-none font-medium hover:bg-[#f7f3e8]/30 px-2 rounded-lg"
              >
                {label}
              </Link>
            )
          )}
          
          {/* Mobile WhatsApp Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 w-full"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
              </svg>
              WhatsApp Kami
            </a>
          </div>
        </div>
      )}

      {/* Enhanced Animation Styles */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Custom scrollbar for dropdown if needed */
        .dropdown-menu::-webkit-scrollbar {
          width: 4px;
        }
        .dropdown-menu::-webkit-scrollbar-track {
          background: transparent;
        }
        .dropdown-menu::-webkit-scrollbar-thumb {
          background: #434f2a;
          border-radius: 2px;
        }
      `}</style>
    </header>
  );
}
import { useState, useEffect } from 'react';
import { Star, Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const services = [
    {
      title: 'Nasi Kotak Premium',
      description: 'Pilihan menu lengkap dengan nasi, lauk utama, sayuran, dan pelengkap',
      image: '/api/placeholder/400/300',
      price: 'Mulai Rp 35.000/box',
    },
    {
      title: 'Prasmanan',
      description: 'Layanan prasmanan untuk berbagai acara dengan beragam menu pilihan',
      image: '/api/placeholder/400/300',
      price: 'Mulai Rp 45.000/orang',
    },
    {
      title: 'Coffee Break',
      description: 'Paket snack dan minuman untuk meeting dan seminar',
      image: '/api/placeholder/400/300',
      price: 'Mulai Rp 25.000/orang',
    },
    {
      title: 'Tumpeng',
      description: 'Tumpeng untuk acara syukuran dan perayaan spesial',
      image: '/api/placeholder/400/300',
      price: 'Mulai Rp 350.000',
    },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      company: 'PT. Maju Bersama',
      review: 'Makanan enak, pelayanan tepat waktu. Sangat memuaskan untuk acara kantor kami.',
      rating: 5,
    },
    {
      name: 'Indah Permata',
      company: 'Permata Event Organizer',
      review: 'Sudah berlangganan sejak 2 tahun lalu. Selalu jadi andalan untuk berbagai acara klien kami.',
      rating: 5,
    },
    {
      name: 'Rudi Hermawan',
      company: 'Kementerian Perekonomian',
      review: 'Kualitas premium dengan harga yang sesuai. Presentasi makanan sangat menarik.',
      rating: 4,
    },
  ];

  return (
    <div className="font-sans">
      {/* TopBar */}
      <div className="bg-amber-500 text-white py-1">
        <div className="container mx-auto flex justify-end px-4">
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="hover:text-amber-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/api/placeholder/50/50" alt="Logo" className="h-12 w-auto mr-4" />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">Dandanggulo</h1>
                <p className="text-xs text-amber-600">Katering Premium Madiun</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {['beranda', 'tentang-kami', 'layanan', 'review', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`${
                        activeSection === section ? 'text-amber-600 font-semibold' : 'text-gray-700'
                      } hover:text-amber-500`}
                    >
                      {section.replace('-', ' ').toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <ul className="space-y-4">
                {['beranda', 'tentang-kami', 'layanan', 'review', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={toggleMenu}
                      className={`${
                        activeSection === section ? 'text-amber-600 font-semibold' : 'text-gray-700'
                      } block`}
                    >
                      {section.replace('-', ' ').toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="beranda" className="relative bg-amber-50">
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('/api/placeholder/1920/1080')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">KATERING PREMIUM MADIUN</h1>
                <p className="text-xl md:text-2xl mb-6">Dipercaya oleh Perusahaan Besar, Artis hingga Pejabat.</p>
                <p className="text-lg md:text-xl mb-8">
                  Siap Dadakan, Garansi Tepat Waktu atau Uang Kembali 100%!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href="#layanan"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold transition-all"
                  >
                    Produk Kami
                  </a>
                  <a
                    href="#contact"
                    className="bg-white hover:bg-gray-100 text-amber-800 px-8 py-3 rounded-md font-semibold transition-all"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        {/* Tentang Kami, Layanan, Review, Contact */}
        {/* These sections are already well-structured in your code */}
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Content */}
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-300 text-sm">
            <p>© {new Date().getFullYear()} Dandanggulo. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

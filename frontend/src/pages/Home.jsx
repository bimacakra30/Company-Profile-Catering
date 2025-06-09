import { useEffect, useState, useRef } from "react";
import { Check, Phone, Mail, ArrowRight, ChevronRight, Star, Award, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getReviews, getLatestProducts, getCategories, BASE_IMAGE_URL } from "../services/api";
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const menuSectionRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [highlightedProducts, setHighlightedProducts] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);

  const slides = [
    {
      image: slide1,
      title: "Selamat Datang di Dandanggulo Catering",
      description: "Solusi Catering Mewah dan Berkelas untuk Setiap Acara Istimewa Anda",
      cta: "Lihat Menu Kami",
      action: () => menuSectionRef.current?.scrollIntoView({ behavior: "smooth" }),
      isLink: false
    },
    {
      image: slide2,
      title: "Menu Eksklusif, Cita Rasa Premium",
      description: "Nikmati Hidangan Signature dengan Sentuhan Kuliner Terbaik",
      cta: "Pesan Sekarang",
      action: () => window.open("https://wa.me/6285790220407", "_blank"),
      isLink: false
    },
    {
      image: slide3,
      title: "Pelayanan Profesional yang Memukau",
      description: "Dedikasi Kami untuk Menjadikan Acara Anda Tak Terlupakan",
      cta: "Hubungi Kami",
      action: "/kontak",
      isLink: true
    },
  ];

  const services = [
    {
      icon: "🎊",
      title: "Pernikahan & Resepsi",
      description: "Paket lengkap catering pernikahan dengan dekorasi elegan dan pelayanan premium"
    },
    {
      icon: "🏢",
      title: "Corporate Event",
      description: "Solusi catering profesional untuk meeting, seminar, dan acara perusahaan"
    },
    {
      icon: "🎂",
      title: "Birthday Party",
      description: "Rayakan ulang tahun dengan menu spesial dan pelayanan yang berkesan"
    },
    {
      icon: "🕌",
      title: "Acara Keagamaan",
      description: "Catering untuk pengajian, akikah, syukuran, dan acara religius lainnya"
    },
    {
      icon: "🎓",
      title: "Wisuda & Graduation",
      description: "Paket catering istimewa untuk merayakan pencapaian akademik"
    },
    {
      icon: "🍽️",
      title: "Prasmanan & Buffet",
      description: "Layanan prasmanan dengan beragam pilihan menu dan presentasi menarik"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

  // Fetch categories
  useEffect(() => {
    getCategories()
      .then(res => {
        setCategories(res.data.data ?? res.data); // Adjust based on your API response structure
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal memuat kategori:", err);
        setLoading(false);
      });
  }, []);

  // Fetch highlighted products
  useEffect(() => {
    getLatestProducts()
      .then(res => setHighlightedProducts(res.data))
      .catch(err => console.error("Gagal memuat produk terbaru:", err));
  }, []);

  // Fetch latest reviews
  useEffect(() => {
    getReviews()
      .then(res => {
        const sorted = res.data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3);
        setLatestReviews(sorted);
      })
      .catch(err => console.error("Gagal memuat review:", err));
  }, []);

  return (
    <div className="font-serif">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
          ))}
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="mb-6">
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {slides[currentSlide].isLink ? (
                  <Link
                    to={slides[currentSlide].action}
                    className="group bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center z-20"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={slides[currentSlide].action}
                    className="group bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center z-20"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
                <a
                  href="https://wa.me/6285790220407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#434f2a] transition-all duration-300 flex items-center justify-center z-20"
                >
                  <FaWhatsapp className="mr-2" />
                  0857 9022 0407
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">8+</div>
              <div className="text-sm md:text-base opacity-90">Tahun Pengalaman</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-sm md:text-base opacity-90">Acara Sukses</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">20+</div>
              <div className="text-sm md:text-base opacity-90">Menu Pilihan</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm md:text-base opacity-90">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium">
                  🏆 Tentang Kami
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-4">
                Dandanggulo Catering
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Dengan pengalaman lebih dari 8 tahun, Dandanggulo Catering telah menjadi pilihan utama
                untuk berbagai acara istimewa di Madiun dan sekitarnya. Kami menghadirkan cita rasa
                autentik Indonesia dengan sentuhan modern dan pelayanan profesional.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Menu tradisional dan modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Bahan berkualitas premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Pelayanan profesional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Harga kompetitif</span>
                </div>
              </div>
              <Link to="/tentang">
                <button className="group bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                  Selengkapnya
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Tersedia Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4">
              🎉 Menu Tersedia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-4">
              Berbagai Pilihan Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai kategori hidangan sesuai kebutuhan dan selera Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#f7f3e8] rounded-3xl p-8 animate-pulse h-40"
                />
              ))
            ) : categories.length === 0 ? (
              <p className="text-center text-gray-500">Belum ada kategori menu tersedia.</p>
            ) : (
              categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#f7f3e8] to-white rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#f7f3e8]"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    🍽️
                  </div>
                  <h3 className="text-xl font-bold text-[#434f2a] mb-3">
                    {category.name_category}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    Pilihan menu {category.name_category.toLowerCase()} yang lezat dan cocok untuk berbagai acara.
                  </p>
                  <a
                    href={`/menu/${slugify(category.name_category)}`}
                    className="text-[#205e2e] font-semibold group-hover:underline flex items-center justify-center mx-auto"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section ref={menuSectionRef} className="py-16 bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4">
              🍽️ Menu Unggulan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-4">
              Cita Rasa Terbaik Indonesia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati kelezatan menu tradisional dan modern yang diolah dengan resep turun temurun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedProducts.map((product) => (
              <Link
                to={`/menu/${slugify(product.category.name_category)}`}
                key={product.id_product}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
                      product.path_image
                        ? `${BASE_IMAGE_URL}${product.path_image}`
                        : "https://via.placeholder.com/300x200/5d7c47/ffffff?text=Dandanggulo+Menu"
                    }
                    alt={product.name_product}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#434f2a] mb-2">
                    {product.name_product}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-sm font-semibold text-[#205e2e]">
                    Rp {Number(product.price_product).toLocaleString("id-ID")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4">
              ⭐ Testimoni
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-4">
              Kata Mereka Tentang Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestReviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f3e8] to-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                  "{review.review_text}"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <div className="font-bold text-[#434f2a] text-sm">{review.customer_name}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(review.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  {review.respon_text && (
                    <div className="mt-2 text-xs italic bg-green-50 p-2 rounded">
                      <span className="font-semibold text-green-800">Balasan dari <i>Bima Cakra</i>:</span><br />
                      "{review.respon_text}"
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
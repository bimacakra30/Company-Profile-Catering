import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8]">
      <div className="container mx-auto px-4">
        {/* Enhanced Header with floating elements */}
        <div className="relative text-center mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-40 h-2 bg-gradient-to-r from-transparent via-[#205e2e] to-transparent rounded-full opacity-60"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-0 left-1/4 w-3 h-3 bg-[#434f2a] rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-10 right-1/4 w-2 h-2 bg-[#205e2e] rounded-full opacity-60 animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <div className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4 shadow-lg">
              📞 Kontak Resmi
            </div>
            <h2 className="text-6xl font-bold text-[#434f2a] mb-4 tracking-wide">SARI DEWI CATERING</h2>
            <p className="text-[#205e2e] italic text-xl font-light">Hubungi Kami Kapan Saja</p>
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-24 h-1 bg-[#434f2a] rounded-full"></div>
              <div className="w-12 h-1 bg-[#434f2a] rounded-full opacity-60"></div>
              <div className="w-6 h-1 bg-[#434f2a] rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border-b-4 border-[#205e2e] hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-[#f7f3e8] text-[#434f2a] rounded-full text-sm font-semibold">
                  📋 Informasi Kontak
                </span>
              </div>
              
              <div className="space-y-6 text-gray-800 text-lg">
                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#f7f3e8] transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <span className="font-medium">0851 0651 1818</span>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#f7f3e8] transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-white" />
                  </div>
                  <span className="font-medium">(0274) 865829</span>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#f7f3e8] transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-white" />
                  </div>
                  <span className="font-medium">catering_sari.dewi@yahoo.co.id</span>
                </div>
                
                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#f7f3e8] transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mt-1">
                    <MapPin className="text-white" />
                  </div>
                  <span className="font-medium leading-relaxed">
                    Jl. Magelang KM.10, Josari, Tridadi, Kec. Sleman, Kab. Sleman, DIY 55511
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-3xl shadow-lg p-4 border-b-4 border-[#434f2a] hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 bg-[#f7f3e8] text-[#434f2a] rounded-full text-sm font-semibold">
                  🗺️ Lokasi Kami
                </span>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Lokasi Sari Dewi Catering"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8071060443644!2d110.3417353750512!3d-7.812861677292878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58404240ec21%3A0xa65c244b5a0d6b1f!2sSari%20Dewi%20Catering!5e0!3m2!1sen!2sid!4v1716200000000!5m2!1sen!2sid"
                  width="100%"
                  height="350"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border border-white rounded-full"></div>
              </div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-block px-6 py-2 bg-[#f7f3e8] text-[#434f2a] rounded-full text-sm font-medium">
                    💬 Siap Melayani
                  </span>
                </div>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed text-[#f7f3e8]">
                  Kami siap melayani kebutuhan catering Anda dengan <strong className="text-white">pelayanan terbaik</strong>. 
                  Hubungi kami sekarang untuk konsultasi dan pemesanan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Service Hours */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#434f2a] mb-4">Jam Pelayanan</h3>
            <div className="w-16 h-1 bg-[#205e2e] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-b-4 border-[#205e2e]">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7f3e8] rounded-full border-2 border-[#434f2a] group-hover:animate-bounce"></div>
              </div>
              <h4 className="text-xl font-bold text-[#434f2a] mb-3">Senin - Jumat</h4>
              <p className="text-gray-600 leading-relaxed">08:00 - 17:00 WIB<br/>Pelayanan konsultasi dan pemesanan</p>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-b-4 border-[#434f2a]">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7f3e8] rounded-full border-2 border-[#205e2e] group-hover:animate-bounce delay-150"></div>
              </div>
              <h4 className="text-xl font-bold text-[#434f2a] mb-3">Sabtu</h4>
              <p className="text-gray-600 leading-relaxed">08:00 - 15:00 WIB<br/>Pelayanan terbatas konsultasi</p>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-b-4 border-[#205e2e]">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7f3e8] rounded-full border-2 border-[#434f2a] group-hover:animate-bounce delay-300"></div>
              </div>
              <h4 className="text-xl font-bold text-[#434f2a] mb-3">Minggu</h4>
              <p className="text-gray-600 leading-relaxed">Tutup<br/>Kecuali untuk acara khusus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
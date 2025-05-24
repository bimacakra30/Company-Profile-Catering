export default function About() {
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
              ✨ Keluarga Dandanggulo
            </div>
            <h2 className="text-6xl font-bold text-[#434f2a] mb-4 tracking-wide">Tentang Kami</h2>
            <p className="text-[#205e2e] italic text-xl font-light">Masakan Rumahan Penuh Kehangatan</p>
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-24 h-1 bg-[#434f2a] rounded-full"></div>
              <div className="w-12 h-1 bg-[#434f2a] rounded-full opacity-60"></div>
              <div className="w-6 h-1 bg-[#434f2a] rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Content with visual breaks */}
        <div className="max-w-5xl mx-auto">
          {/* Story Section */}
          <div className="max-w-5xl mx-auto text-gray-700 space-y-8 text-lg leading-relaxed mb-16">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-[#f7f3e8] text-[#434f2a] rounded-full text-sm font-semibold">
                📖 Cerita Kami
              </span>
            </div>
            
            <p className="text-xl">
              <span className="text-[#205e2e] font-bold text-2xl">Dandanggulo</span> adalah usaha catering rumahan yang dikelola oleh keluarga kami dengan sepenuh hati. 
              Berangkat dari kecintaan terhadap masakan rumahan yang autentik dan hangat, kami membangun Dandanggulo sebagai 
              wujud rasa dan kebersamaan yang ingin kami bagi kepada lebih banyak orang.
            </p>
            
            <p className="italic text-[#434f2a] font-medium text-center px-8">
              "Kami melayani berbagai kebutuhan catering seperti arisan, pengajian, ulang tahun, rapat kecil, dan acara lainnya.
              Setiap hidangan dimasak dengan bahan-bahan segar dan disajikan dengan penuh perhatian."
            </p>
            
            <p>
              Kami percaya bahwa makanan bukan hanya soal rasa, tapi juga tentang kehangatan dan momen berharga. 
              Dengan porsi yang cukup, harga yang bersahabat, serta rasa rumahan yang otentik, 
              kami siap menjadi bagian dari setiap momen spesial Anda.
            </p>
          </div>

          {/* Legal & Trust Section - Integrated from Portfolio */}
          <div className="bg-gradient-to-r from-[#f7f3e8] to-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg border border-[#434f2a]/10">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4 shadow-lg">
                🔐 Kepercayaan & Legalitas
              </div>
              <h3 className="text-3xl font-bold text-[#434f2a] mb-4">Usaha Kami Telah Memiliki Izin Resmi</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Kepercayaan Anda adalah prioritas kami. Usaha catering kami telah terdaftar resmi dan memiliki izin usaha yang sah, 
                sehingga Anda bisa menikmati layanan kami dengan rasa aman dan percaya diri.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#205e2e]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110 shadow-lg">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-xl font-semibold text-[#205e2e] mb-3">Terdaftar Resmi</h4>
                <p className="text-gray-600 leading-relaxed">Izin usaha lengkap & legal. Siap melayani kebutuhan acara Anda dengan aman dan terpercaya.</p>
              </div>

              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#434f2a]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110 shadow-lg">
                  <span className="text-2xl">🍴</span>
                </div>
                <h4 className="text-xl font-semibold text-[#205e2e] mb-3">Cita Rasa Premium</h4>
                <p className="text-gray-600 leading-relaxed">Kami mengutamakan kualitas dan rasa dalam setiap sajian, dengan tampilan yang menggugah selera.</p>
              </div>

              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#205e2e]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110 shadow-lg">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="text-xl font-semibold text-[#205e2e] mb-3">Pengalaman Profesional</h4>
                <p className="text-gray-600 leading-relaxed">Telah menangani berbagai event — dari pernikahan hingga corporate gathering dengan profesional.</p>
              </div>
            </div>
          </div>

          {/* Enhanced Service Highlights */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#f7f3e8] text-[#434f2a] rounded-full text-sm font-semibold mb-4">
                ⭐ Keunggulan Kami
              </div>
              <h3 className="text-3xl font-bold text-[#434f2a] mb-4">Mengapa Memilih Dandanggulo?</h3>
              <div className="w-16 h-1 bg-[#205e2e] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-b-4 border-[#205e2e]">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7f3e8] rounded-full border-2 border-[#434f2a] group-hover:animate-bounce"></div>
                </div>
                <h4 className="text-xl font-bold text-[#434f2a] mb-3">Beragam Menu</h4>
                <p className="text-gray-600 leading-relaxed">Pilihan menu yang bervariasi untuk berbagai acara dan selera, dari tradisional hingga modern</p>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-b-4 border-[#434f2a]">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7f3e8] rounded-full border-2 border-[#205e2e] group-hover:animate-bounce delay-150"></div>
                </div>
                <h4 className="text-xl font-bold text-[#434f2a] mb-3">Bahan Berkualitas</h4>
                <p className="text-gray-600 leading-relaxed">Menggunakan bahan-bahan segar berkualitas premium untuk setiap hidangan yang kami sajikan</p>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-b-4 border-[#205e2e]">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7f3e8] rounded-full border-2 border-[#434f2a] group-hover:animate-bounce delay-300"></div>
                </div>
                <h4 className="text-xl font-bold text-[#434f2a] mb-3">Tepat Waktu</h4>
                <p className="text-gray-600 leading-relaxed">Pengiriman yang selalu tepat waktu dengan pelayanan profesional untuk kenyamanan Anda</p>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border border-white rounded-full"></div>
              </div>
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="inline-block px-6 py-2 bg-[#f7f3e8] text-[#434f2a] rounded-full text-sm font-medium">
                    💝 Komitmen Kami
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#f7f3e8]">Kami Siap Menyajikan yang Terbaik</h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-[#f7f3e8] mb-4">
                  Dengan sentuhan elegan dan profesional, kami hadir bukan hanya untuk mengisi perut — 
                  tapi untuk meninggalkan kesan yang hangat dan tak terlupakan dalam setiap momen istimewa Anda.
                </p>
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-white">
                  Terima kasih telah mempercayakan kebutuhan catering Anda kepada <strong className="text-[#f7f3e8]">Dandanggulo</strong>. 
                  Kami siap melayani dan terus bertumbuh bersama Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
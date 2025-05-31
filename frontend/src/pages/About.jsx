export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-[#faf7f0] to-[#f5f1e8]">
      <section className="relative text-center py-20 px-4">
        {/* Title Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#205e2e] to-transparent rounded-full opacity-60"></div>
        <div className="absolute top-0 left-1/4 w-2.5 h-2.5 bg-[#434f2a] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-[#205e2e] rounded-full opacity-60 animate-pulse delay-1000"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-[#434f2a] mb-4 tracking-wide">Tentang Kami</h2>
          <p className="text-[#205e2e] italic text-lg font-light">Masakan Rumahan Penuh Kehangatan</p>
          <div className="flex justify-center mt-6 space-x-1.5">
            <div className="w-20 h-1 bg-[#434f2a] rounded-full"></div>
            <div className="w-10 h-1 bg-[#434f2a] rounded-full opacity-60"></div>
            <div className="w-4 h-1 bg-[#434f2a] rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto mt-16">
          {/* Story Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-[#434f2a]/10">
            <div className="text-gray-700 space-y-6 text-base leading-relaxed">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-[#434f2a] text-white rounded-full text-xs font-semibold">
                  📖 Cerita Kami
                </span>
              </div>

              <p>
                <span className="text-[#205e2e] font-bold text-xl">Dandanggulo</span> adalah usaha catering rumahan yang dikelola oleh keluarga kami dengan sepenuh hati. 
                Berangkat dari kecintaan terhadap masakan rumahan yang autentik dan hangat, kami membangun Dandanggulo sebagai 
                wujud rasa dan kebersamaan yang ingin kami bagi kepada lebih banyak orang.
              </p>

              <p className="italic text-[#434f2a] font-medium text-center px-4 py-4 bg-[#f7f3e9] rounded-lg">
                "Kami melayani berbagai kebutuhan catering seperti arisan, pengajian, ulang tahun, rapat kecil, dan acara lainnya.
                Setiap hidangan dimasak dengan bahan-bahan segar dan disajikan dengan penuh perhatian."
              </p>

              <p>
                Kami percaya bahwa makanan bukan hanya soal rasa, tapi juga tentang kehangatan dan momen berharga. 
                Dengan porsi yang cukup, harga yang bersahabat, serta rasa rumahan yang otentik, 
                kami siap menjadi bagian dari setiap momen spesial Anda.
              </p>
            </div>
          </div>

          {/* Legal & Trust Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-[#434f2a]/10">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 bg-[#205e2e] text-white rounded-full text-xs font-medium mb-4 shadow">
                🔐 Kepercayaan & Legalitas
              </div>
              <h3 className="text-2xl font-bold text-[#434f2a] mb-4">Usaha Kami Telah Memiliki Izin Resmi</h3>
              <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Kepercayaan Anda adalah prioritas kami. Usaha catering kami telah terdaftar resmi dan memiliki izin usaha yang sah, 
                sehingga Anda bisa menikmati layanan kami dengan rasa aman dan percaya diri.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-[#f7f3e9] rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#205e2e]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 shadow">
                  <span className="text-xl">🔒</span>
                </div>
                <h4 className="text-lg font-semibold text-[#205e2e] mb-2">Terdaftar Resmi</h4>
                <p className="text-sm text-gray-600">Izin usaha lengkap & legal. Siap melayani kebutuhan acara Anda dengan aman dan terpercaya.</p>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#f7f3e9] rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#434f2a]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 shadow">
                  <span className="text-xl">🍴</span>
                </div>
                <h4 className="text-lg font-semibold text-[#205e2e] mb-2">Cita Rasa Premium</h4>
                <p className="text-sm text-gray-600">Kami mengutamakan kualitas dan rasa dalam setiap sajian, dengan tampilan yang menggugah selera.</p>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#f7f3e9] rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#205e2e]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#205e2e] to-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 shadow">
                  <span className="text-xl">💼</span>
                </div>
                <h4 className="text-lg font-semibold text-[#205e2e] mb-2">Pengalaman Profesional</h4>
                <p className="text-sm text-gray-600">Telah menangani berbagai event — dari pernikahan hingga corporate gathering dengan profesional.</p>
              </div>
            </div>
          </div>

          {/* Keunggulan Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-[#434f2a]/10">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-[#434f2a] text-white rounded-full text-xs font-semibold mb-4">
                ⭐ Keunggulan Kami
              </div>
              <h3 className="text-2xl font-bold text-[#434f2a] mb-4">Mengapa Memilih Dandanggulo?</h3>
              <div className="w-12 h-1 bg-[#205e2e] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Feature Cards */}
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  ),
                  title: "Beragam Menu",
                  desc: "Pilihan menu yang bervariasi untuk berbagai acara dan selera, dari tradisional hingga modern",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  ),
                  title: "Bahan Berkualitas",
                  desc: "Menggunakan bahan-bahan segar berkualitas premium untuk setiap hidangan yang kami sajikan",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                  title: "Tepat Waktu",
                  desc: "Pengiriman yang selalu tepat waktu dengan pelayanan profesional untuk kenyamanan Anda",
                },
              ].map((item, idx) => (
                <div key={idx} className="group bg-[#f7f3e9] rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#205e2e]">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto transform group-hover:rotate-12 group-hover:scale-110 shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#434f2a] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Komitmen Section */}
          <div className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border border-white rounded-full"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="mb-4">
                <span className="inline-block px-5 py-1.5 bg-[#f7f3e9] text-[#434f2a] rounded-full text-xs font-medium">
                  💝 Komitmen Kami
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#f7f3e9]">Kami Siap Menyajikan yang Terbaik</h3>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#f7f3e9] mb-4">
                Dengan sentuhan elegan dan profesional, kami hadir bukan hanya untuk mengisi perut — 
                tapi untuk meninggalkan kesan yang hangat dan tak terlupakan dalam setiap momen istimewa Anda.
              </p>
              <p className="text-base md:text-lg font-semibold leading-relaxed text-white">
                Terima kasih telah mempercayakan kebutuhan catering Anda kepada <strong className="text-[#f7f3e9]">Dandanggulo</strong>. 
                Kami siap melayani dan terus bertumbuh bersama Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f7f3e8] to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative text-center mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-32 h-1.5 bg-[#205e2e] rounded-full"></div>
          <h2 className="text-5xl font-bold text-[#434f2a] mb-3">Tentang Kami</h2>
          <p className="text-[#205e2e] italic text-lg">Masakan Rumahan Penuh Kehangatan</p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 bg-[#434f2a] mx-2"></div>
            <div className="w-8 h-0.5 bg-[#434f2a] mx-2"></div>
            <div className="w-4 h-0.5 bg-[#434f2a] mx-2"></div>
          </div>
        </div>

        {/* Content area (no box wrapping) */}
        <div className="max-w-5xl mx-auto text-gray-700 space-y-8 text-lg leading-relaxed px-4 md:px-0">
          <p>
            <span className="text-[#205e2e] font-bold text-xl">Dandanggulo</span> adalah usaha catering rumahan yang dikelola oleh keluarga kami dengan sepenuh hati. 
            Berangkat dari kecintaan terhadap masakan rumahan yang autentik dan hangat, kami membangun Dandanggulo sebagai 
            wujud rasa dan kebersamaan yang ingin kami bagi kepada lebih banyak orang.
          </p>
          <blockquote className="pl-4 border-l-4 border-[#434f2a] italic text-gray-600">
            Kami melayani berbagai kebutuhan catering seperti arisan, pengajian, ulang tahun, rapat kecil, dan acara lainnya.
            Setiap hidangan dimasak dengan bahan-bahan segar dan disajikan dengan penuh perhatian.
          </blockquote>
          <p>
            Kami percaya bahwa makanan bukan hanya soal rasa, tapi juga tentang kehangatan dan momen berharga. 
            Dengan porsi yang cukup, harga yang bersahabat, serta rasa rumahan yang otentik, 
            kami siap menjadi bagian dari setiap momen spesial Anda.
          </p>
          <div className="bg-[#f7f3e8] p-4 rounded-md text-[#434f2a] font-medium text-center">
            Terima kasih telah mempercayakan kebutuhan catering Anda kepada <strong>Dandanggulo</strong>. 
            Kami siap melayani dan terus bertumbuh bersama Anda.
          </div>
        </div>

        {/* Service highlights */}
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-20 px-4 md:px-0">
          <div className="group text-center">
            <div className="w-16 h-16 bg-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-5 transform transition-transform group-hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#434f2a] mb-2">Beragam Menu</h3>
            <p className="text-gray-600">Pilihan menu yang bervariasi untuk berbagai acara dan selera</p>
          </div>

          <div className="group text-center">
            <div className="w-16 h-16 bg-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-5 transform transition-transform group-hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#434f2a] mb-2">Bahan Berkualitas</h3>
            <p className="text-gray-600">Menggunakan bahan-bahan segar berkualitas untuk setiap hidangan</p>
          </div>

          <div className="group text-center">
            <div className="w-16 h-16 bg-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-5 transform transition-transform group-hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#434f2a] mb-2">Tepat Waktu</h3>
            <p className="text-gray-600">Pengiriman yang selalu tepat waktu untuk kenyamanan Anda</p>
          </div>
        </div>
      </div>
    </section>
  );
}

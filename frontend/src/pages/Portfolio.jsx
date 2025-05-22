import React from 'react';

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#434f2a]">
      <header className="bg-[#205e2e] text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Tentang Kami</h1>
        <p className="text-lg mt-2 font-light">Cita Rasa yang Mengundang Selera</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#434f2a]">Usaha Kami Telah Memiliki Izin Resmi</h2>
          <p className="text-base text-[#434f2a]">
            Kepercayaan Anda adalah prioritas kami. Usaha catering kami telah terdaftar resmi dan memiliki izin usaha yang sah, 
            sehingga Anda bisa menikmati layanan kami dengan rasa aman dan percaya diri.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#205e2e] mb-2">🔒 Terdaftar Resmi</h3>
            <p className="text-sm text-[#434f2a]">Izin usaha lengkap & legal. Siap melayani kebutuhan acara Anda dengan aman.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#205e2e] mb-2">🍴 Cita Rasa Premium</h3>
            <p className="text-sm text-[#434f2a]">Kami mengutamakan kualitas dan rasa dalam setiap sajian, dengan tampilan yang menggugah selera.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#205e2e] mb-2">💼 Pengalaman Profesional</h3>
            <p className="text-sm text-[#434f2a]">Telah menangani berbagai event — dari pernikahan hingga corporate gathering.</p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#434f2a]">Kami Siap Menyajikan yang Terbaik</h2>
          <p className="text-base text-[#434f2a]">
            Dengan sentuhan elegan dan profesional, kami hadir bukan hanya untuk mengisi perut — 
            tapi untuk meninggalkan kesan yang hangat dan tak terlupakan dalam setiap momen istimewa Anda.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TentangKami;

import { useState } from 'react';
import siupImg from '../assets/document/siup.jpeg';
import halalImg from '../assets/document/halal.jpeg';
import nibImg from '../assets/document/NIB.jpeg';

export default function About() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documents = [
    {
      id: 'siup',
      name: 'SIUP',
      title: 'Surat Izin Usaha Perdagangan',
      description: 'Dokumen resmi izin usaha perdagangan',
      icon: '🏢',
      image: siupImg,
    },
    {
      id: 'halal',
      name: 'Halal',
      title: 'Sertifikat Halal',
      description: 'Sertifikat jaminan produk halal',
      icon: '✅',
      image: halalImg,
    },
    {
      id: 'nib',
      name: 'NIB',
      title: 'Nomor Induk Berusaha',
      description: 'Nomor identitas resmi usaha',
      icon: '📋',
      image: nibImg,
    },
  ];

  const values = [
    {
      icon: '❤️',
      title: 'Kehangatan Keluarga',
      description: 'Setiap hidangan dibuat dengan cinta seperti memasak untuk keluarga sendiri'
    },
    {
      icon: '🌿',
      title: 'Bahan Berkualitas',
      description: 'Menggunakan bahan-bahan segar dan bumbu pilihan untuk cita rasa autentik'
    },
    {
      icon: '🤝',
      title: 'Kepercayaan',
      description: 'Membangun hubungan jangka panjang melalui pelayanan terbaik'
    }
  ];

  const advantages = [
    { icon: "🍽", title: "Beragam Menu", desc: "Pilihan menu bervariasi untuk berbagai acara" },
    { icon: "🥬", title: "Bahan Berkualitas", desc: "Bahan segar berkualitas premium" },
    { icon: "⏰", title: "Tepat Waktu", desc: "Pengiriman selalu tepat waktu" }
  ];

  const openDocument = (doc) => {
    setSelectedDocument(doc);
  };

  const closeModal = () => {
    setSelectedDocument(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefdf8] to-[#f8f6f0]">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-3">
            Dandanggulo Catering
          </h1>
          <p className="text-lg text-[#2d5016]/80 font-light italic max-w-xl mx-auto mb-4">
            Dari Dapur Keluarga untuk Keluarga Indonesia
          </p>
          <div className="flex justify-center mt-6">
                        <div className="w-20 h-0.5 bg-[#434f2a] mx-2"></div>
                        <div className="w-8 h-0.5 bg-[#434f2a] mx-2"></div>
                        <div className="w-4 h-0.5 bg-[#434f2a] mx-2"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-block px-3 py-1 bg-[#2d5016] text-white rounded-full text-xs font-semibold mb-2">
              📖 Kisah Perjalanan Kami
            </div>
            <h2 className="text-2xl font-bold text-[#2d5016] mb-1">Cerita Dandanggulo</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-[#2d5016]/10 mb-6">
            <p className="text-[#2d5016]/80 leading-relaxed text-center mb-4">
              Dandanggulo Catering dimulai dari <strong>dapur kecil rumah sederhana pada tahun 2018</strong>, 
              ketika Bu Ifa mulai memasak untuk tetangga dengan resep turun temurun keluarga. 
              Saat pandemi 2020, kami justru tumbuh melayani keluarga yang rindu cita rasa rumahan.
            </p>
            <p className="text-[#2d5016]/80 leading-relaxed text-center">
              <strong>Tahun 2022</strong> menjadi tonggak penting ketika kami memperoleh izin resmi dan sertifikat halal, 
              memungkinkan kami melayani acara-acara besar dengan standar profesional. 
              Kini di <strong>tahun 2024</strong>, Dandanggulo telah menjadi bagian dari ribuan momen bahagia keluarga Indonesia.
            </p>

            <div className="mt-6 p-4 bg-[#f8f6f0] rounded-lg border-l-4 border-[#2d5016]">
              <p className="text-[#2d5016] font-medium text-center italic">
                "Setiap hidangan dimasak dengan bahan-bahan segar dan disajikan dengan penuh perhatian untuk menciptakan momen berharga."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 bg-[#2d5016] text-white rounded-full text-xs font-semibold mb-2">
              ⭐ Nilai-Nilai Kami
            </div>
            <h2 className="text-2xl font-bold text-[#2d5016] mb-1">Prinsip yang Kami Pegang Teguh</h2>
            <p className="text-[#2d5016]/70">
              Dalam setiap hidangan dan pelayanan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-sm p-6 border border-[#2d5016]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#f8f6f0] border border-[#2d5016]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2d5016] mb-2">{value.title}</h3>
                </div>
                <p className="text-sm text-[#2d5016]/70 leading-relaxed text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-[#2d5016]/10 mb-6">
            <h3 className="text-xl font-bold text-[#434f2a] mb-6 text-center">🔐 Usaha Kami Telah Memiliki Izin Resmi</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {documents.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => openDocument(doc)}
                  className="group bg-[#f7f3e9] border border-[#434f2a]/20 rounded-lg p-3 hover:-translate-y-1 transition"
                >
                  <div className="text-lg mb-1">{doc.icon}</div>
                  <h5 className="font-bold text-[#205e2e] text-sm">{doc.name}</h5>
                  <div className="text-xs bg-white mt-1 px-2 py-0.5 rounded-full inline-block">Lihat</div>
                </button>
              ))}
            </div>

            {/* Legal Features */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['🏆', 'Standar Tinggi', 'Memenuhi standar kualitas dan keamanan pangan'],
                ['✨', 'Pelayanan Prima', 'Komitmen memberikan pengalaman kuliner terbaik'],
                ['🤲', 'Amanah', 'Menjaga kepercayaan dengan transparansi'],
              ].map(([icon, title, desc], idx) => (
                <div key={idx} className="group bg-[#f8f6f0] p-4 rounded-lg border-l-4 border-[#2d5016] text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-lg mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                  <h4 className="text-sm font-bold text-[#2d5016] mb-1">{title}</h4>
                  <p className="text-xs text-[#2d5016]/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2d5016]/10">
            <div className="text-center mb-4">
              <div className="inline-block px-3 py-1 bg-[#2d5016] text-white rounded-full text-xs font-semibold mb-2">
                ⭐ Keunggulan Kami
              </div>
              <h3 className="text-xl font-bold text-[#2d5016] mb-1">Mengapa Memilih Dandanggulo?</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {advantages.map((item, idx) => (
                <div key={idx} className="group bg-[#f8f6f0] rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#2d5016]">
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#2d5016] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#2d5016]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Document Display */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              ×
            </button>

            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-[#434f2a]">
                {selectedDocument.icon} {selectedDocument.title}
              </h3>
              <p className="text-sm text-[#205e2e]">{selectedDocument.description}</p>
            </div>

            <div className="w-full">
              <img
                src={selectedDocument.image}
                alt={selectedDocument.name}
                className="max-w-full max-h-[400px] mx-auto rounded shadow"
              />
            </div>

            <div className="mt-4 flex justify-center gap-3">
              <a
                href={selectedDocument.image}
                download={selectedDocument.name}
                className="bg-[#434f2a] text-white px-4 py-1.5 rounded hover:bg-[#205e2e] text-sm"
              >
                Download
              </a>
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-1.5 rounded hover:bg-gray-600 text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
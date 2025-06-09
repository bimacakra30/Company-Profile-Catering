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

  const openDocument = (doc) => {
    setSelectedDocument(doc);
  };

  const closeModal = () => {
    setSelectedDocument(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-[#faf7f0] to-[#f5f1e8]">
      <section className="relative text-center py-12 px-4 pt-24">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-[#434f2a] mb-2 tracking-wide">Tentang Kami</h2>
          <p className="text-[#205e2e] italic text-base font-light">Masakan Rumahan Penuh Kehangatan</p>
        </div>

        {/* Legal Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-[#434f2a] mb-6">🔐 Usaha Kami Telah Memiliki Izin Resmi</h3>

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

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['🔒', 'Terdaftar Resmi', 'Izin usaha lengkap & legal'],
              ['🍴', 'Cita Rasa Premium', 'Kualitas dan rasa terjamin'],
              ['💼', 'Berpengalaman', 'Profesional dalam melayani'],
            ].map(([icon, title, desc], idx) => (
              <div key={idx} className="bg-[#f7f3e9] p-4 rounded-lg border-l-4 border-[#205e2e] text-center">
                <div className="text-xl mb-2">{icon}</div>
                <h4 className="text-sm font-bold text-[#434f2a]">{title}</h4>
                <p className="text-xs text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              &times;
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

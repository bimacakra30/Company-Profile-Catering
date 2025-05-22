import React, { useEffect, useState } from 'react';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      // Replace with your actual axios call
      // const response = await axios.get('http://127.0.0.1:8000/api/reviews');
      // setReviews(response.data);
      
      // Demo data for display
      setReviews([
        {
          customer_name: "Sari Dewi",
          review: "Makanan dari Dandanggulo sangat lezat dan pelayanannya memuaskan. Cocok banget untuk acara keluarga!",
          created_at: "2024-01-15T10:00:00Z"
        },
        {
          customer_name: "Budi Santoso", 
          review: "Catering untuk acara kantor kemarin sangat bagus. Semua tamu puas dengan rasanya. Recommended!",
          created_at: "2024-01-10T15:30:00Z"
        }
      ]);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Replace with your actual axios call
      // await axios.post('http://127.0.0.1:8000/api/reviews', {
      //   customer_name: name,
      //   review: review,
      // });

      // Demo: Add to local state
      const newReview = {
        customer_name: name,
        review: review,
        created_at: new Date().toISOString()
      };
      setReviews(prev => [newReview, ...prev]);

      setName('');
      setReview('');
      // fetchReviews();
    } catch (err) {
      console.error(err);
      setError('Gagal mengirim ulasan. Cek koneksi atau API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-block w-20 h-1 bg-[#205e2e] rounded-full mb-4"></div>
          </div>
          <h1 className="text-5xl font-bold text-[#434f2a] mb-4">Testimoni Pelanggan</h1>
          <p className="text-lg text-[#205e2e] italic max-w-2xl mx-auto">
            Kepuasan pelanggan adalah kebanggaan kami. Dengarkan cerita mereka tentang pengalaman bersama Dandanggulo.
          </p>
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-16 h-1 bg-[#434f2a] rounded-full"></div>
            <div className="w-8 h-1 bg-[#434f2a] rounded-full opacity-60"></div>
            <div className="w-4 h-1 bg-[#434f2a] rounded-full opacity-40"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#f7f3e8] h-fit">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#434f2a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#434f2a] mb-2">Bagikan Pengalaman Anda</h2>
              <p className="text-gray-600">Ceritakan kepada kami bagaimana layanan catering Dandanggulo</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#434f2a] font-semibold mb-2">
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-[#f7f3e8] focus:border-[#434f2a] px-4 py-3 rounded-xl transition-colors duration-300 outline-none"
                  placeholder="Masukkan nama lengkap Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-[#434f2a] font-semibold mb-2">
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Ulasan & Testimoni
                </label>
                <textarea
                  className="w-full border-2 border-[#f7f3e8] focus:border-[#434f2a] px-4 py-3 rounded-xl transition-colors duration-300 outline-none resize-none"
                  rows="4"
                  placeholder="Ceritakan pengalaman Anda dengan layanan catering kami..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#205e2e] hover:to-[#434f2a] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim Ulasan...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Kirim Testimoni
                  </div>
                )}
              </button>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Reviews Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#434f2a] mb-4">Apa Kata Mereka</h2>
              <div className="w-16 h-1 bg-[#205e2e] rounded-full"></div>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
              {reviews.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#f7f3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#434f2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">Belum ada testimoni.</p>
                  <p className="text-gray-400 text-sm mt-2">Jadilah yang pertama memberikan ulasan!</p>
                </div>
              ) : (
                reviews.map((rev, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-[#f7f3e8] hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {rev.customer_name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-[#434f2a] text-lg">{rev.customer_name}</h4>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">"{rev.review}"</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(rev.created_at).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        {reviews.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-[#434f2a] to-[#205e2e] rounded-3xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Terima Kasih atas Kepercayaan Anda</h3>
              <p className="text-lg opacity-90 mb-6">Dandanggulo terus berkomitmen memberikan pelayanan terbaik</p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">{reviews.length}</div>
                  <div className="text-sm opacity-80">Total Testimoni</div>
                </div>
                <div className="w-px h-12 bg-white opacity-30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">⭐⭐⭐⭐⭐</div>
                  <div className="text-sm opacity-80">Rating Pelanggan</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
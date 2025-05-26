import { useEffect, useState } from 'react';
import { getReviews, postReview } from '../services/api';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      const response = await getReviews();
      setReviews(response.data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        customer_name: name,
        review_text: review,
      };

      await postReview(payload);
      await fetchReviews();
      setName('');
      setReview('');
    } catch (err) {
      console.error(err);
      setError('Gagal mengirim ulasan. Cek koneksi atau format data.');
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#434f2a] mb-4">Testimoni Pelanggan</h1>
          <p className="text-lg text-[#205e2e] italic max-w-2xl mx-auto">
            Kepuasan pelanggan adalah kebanggaan kami. Dengarkan cerita mereka tentang pengalaman bersama Dandanggulo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#f7f3e8]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#434f2a] mb-2">Bagikan Pengalaman Anda</h2>
              <p className="text-gray-600">Ceritakan kepada kami bagaimana layanan catering Dandanggulo</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#434f2a] font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full border-2 border-[#f7f3e8] focus:border-[#434f2a] px-4 py-3 rounded-xl"
                  placeholder="Masukkan nama lengkap Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-[#434f2a] font-semibold mb-2">Ulasan & Testimoni</label>
                <textarea
                  className="w-full border-2 border-[#f7f3e8] focus:border-[#434f2a] px-4 py-3 rounded-xl resize-none"
                  rows="4"
                  placeholder="Ceritakan pengalaman Anda dengan layanan catering kami..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#205e2e] hover:to-[#434f2a] transition-all duration-300 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Mengirim Ulasan...' : 'Kirim Testimoni'}
              </button>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mt-4">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-3xl font-bold text-[#434f2a] mb-4">Apa Kata Mereka</h2>
            <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
              {reviews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Belum ada testimoni.</p>
                  <p className="text-gray-400 text-sm mt-2">Jadilah yang pertama memberikan ulasan!</p>
                </div>
              ) : (
                reviews.map((rev, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-[#f7f3e8]">
                    <h4 className="font-bold text-[#434f2a] text-lg">{rev.customer_name}</h4>
                    <p className="text-gray-700 mb-3 leading-relaxed">"{rev.review_text}"</p>
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(rev.created_at).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>

                    {/* Balasan Admin */}
                    {rev.respon_text && (
                      <div className="mt-4 p-4 bg-[#f0fdf4] border-l-4 border-[#22c55e] rounded-md">
                        <p className="text-sm text-gray-700 italic mb-1">
                          Balasan dari <strong>{rev.user?.name || 'Admin'}</strong>:
                        </p>
                        <p className="text-gray-800">"{rev.respon_text}"</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

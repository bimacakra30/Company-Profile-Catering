import { useEffect, useState } from 'react';
import { getReviews, postReview } from '../services/api';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      const response = await getReviews();
      const sortedReviews = response.data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setReviews(sortedReviews);
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
      setShowForm(false);
      setCurrentPage(0);
    } catch (err) {
      console.error(err);
      setError('Gagal mengirim ulasan. Cek koneksi atau format data.');
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const paginatedReviews = reviews.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#fefdf8] to-[#f8f6f0] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#434f2a] mb-4 tracking-wide">Testimoni Pelanggan</h1>
          <p className="text-[#205e2e] italic text-lg font-light">
            Kepuasan pelanggan adalah kebanggaan kami. Dengarkan cerita mereka tentang pengalaman bersama Dandanggulo.
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center text-gray-600">Belum ada testimoni.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {paginatedReviews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-[#f7f3e8]"
              >
                <h4 className="font-bold text-[#434f2a] text-lg mb-2">{item.customer_name}</h4>
                <p className="text-gray-700 mb-3">"{item.review_text}"</p>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(item.created_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>

                {item.respon_text && (
                  <div className="mt-3 p-3 bg-[#f0fdf4] border-l-4 border-[#22c55e] rounded-md text-left">
                    <p className="text-sm text-gray-700 italic mb-1">
                      Balasan dari <strong>{item.user?.name || 'Admin'}</strong>:
                    </p>
                    <p className="text-gray-800">"{item.respon_text}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-10">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronLeft />
            </button>
            <span className="text-[#434f2a] font-semibold">
              Halaman {currentPage + 1} dari {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#205e2e] hover:bg-[#2e7033] text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            {showForm ? 'Tutup Formulir' : 'Tambah Testimoni'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#f7f3e8] mb-6 max-w-2xl mx-auto">
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
        )}
      </div>
    </div>
  );
};

export default Testimonial;
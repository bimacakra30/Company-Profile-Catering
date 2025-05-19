export default function Testimonial() {
  const testimonials = [/* data seperti sebelumnya */];

  return (
    <section className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Testimoni Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <h4 className="text-lg font-semibold text-green-700">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

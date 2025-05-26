import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function MenuByCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getProducts();
        const allProducts = response.data.products;

        const filtered = allProducts.filter(
          item =>
            item.category?.name_category
              ?.toLowerCase()
              .replace(/\s+/g, "-") === slug
        );

        setProducts(filtered);
      } catch (err) {
        console.error("Gagal memuat data:", err);
        setError("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const titleCase = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="pt-24 px-6 pb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Menu Favorit - {titleCase(slug)}
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">
          Belum ada menu di kategori ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id_product}
              className="bg-white rounded-lg shadow p-4"
            >
              <img
                src={`http://127.0.0.1:8000/storage/${product.path_image}`}
                alt={product.name_product}
                className="w-full h-48 object-cover rounded mb-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name_product}
              </h3>
              <p className="text-green-700 font-bold">
                Rp{" "}
                {Number(product.price_product).toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                })}
              </p>
              <p className="text-sm mt-2 text-gray-600">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
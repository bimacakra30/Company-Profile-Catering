import { useEffect, useState } from "react";
import { getPortfolios } from "../services/api";

export default function Portfolio() {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        getPortfolios()
            .then((res) => {
                setPortfolios(res.data.data ?? res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal memuat portfolio:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#434f2a] mb-4 tracking-wide">Portofolio</h2>
                    <p className="text-[#205e2e] italic text-lg font-light">Dokumentasi Aktivitas dan Momen Terbaik Kami</p>
                    <div className="flex justify-center mt-6">
                        <div className="w-20 h-0.5 bg-[#434f2a] mx-2"></div>
                        <div className="w-8 h-0.5 bg-[#434f2a] mx-2"></div>
                        <div className="w-4 h-0.5 bg-[#434f2a] mx-2"></div>
                    </div>
                </div>

                {loading ? (
                    <p className="text-center text-gray-600">Memuat portofolio...</p>
                ) : portfolios.length === 0 ? (
                    <p className="text-center text-gray-500">Belum ada data portofolio.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolios.map((item) => (
                            <div
                                key={item.id_portfolio}
                                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer h-64 flex"
                                onClick={() => setSelectedItem(item)}
                            >
                                {/* Gambar Kiri */}
                                <div className="w-1/3 h-full">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${item.path_image}`}
                                        alt={item.name_activity}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info Kanan */}
                                <div className="w-2/3 p-4 flex flex-col justify-between overflow-hidden">
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#434f2a] mb-1 truncate">{item.name_activity}</h3>
                                        <p className="text-sm text-gray-700 line-clamp-3 overflow-hidden">
                                            {item.description}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {new Date(item.date_activity).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal Full Info */}
            {selectedItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="bg-white max-w-3xl w-full rounded-lg overflow-hidden shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`http://127.0.0.1:8000/storage/${selectedItem.path_image}`}
                            alt={selectedItem.name_activity}
                            className="w-full h-96 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-3xl font-bold text-[#434f2a] mb-3">
                                {selectedItem.name_activity}
                            </h3>
                            <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(selectedItem.date_activity).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                            <div className="mt-6 text-right">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="px-4 py-2 bg-[#434f2a] text-white rounded hover:bg-[#2d391a]"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
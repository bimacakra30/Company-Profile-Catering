import { Check } from "lucide-react";

export default function Menu() {
  const menuItems = [/* data seperti sebelumnya */];
  const packages = [/* data seperti sebelumnya */];

  return (
    <div className="pt-24">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Menu Favorit</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Paket Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pack, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">{pack.name}</h3>
                <p className="text-2xl font-semibold text-gray-800 mb-4">{pack.price}</p>
                <ul className="text-gray-700 space-y-2">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

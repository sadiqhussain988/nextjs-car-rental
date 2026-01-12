import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function ServiceAreas() {
  const areaCategories = [
    {
      category: "Sharjah City Areas",
      areas: [
        "Sharjah City Center",
        "Al Qasimia",
        "Al Rahmaniya",
        "Al Nasserya",
        "Al Heerah Suburb",
        "Al Sharq",
        "Sharqan",
        "Al Jlail",
        "Maliha Road"
      ]
    },
    {
      category: "Industrial & Business Zones",
      areas: [
        "Saif Zone",
        "Al Batayih",
        "Alsajaa Industrial",
        "Sharjah Industrial Area 18",
        "Hamriya Free Zone",
        "Emirates Industrial Area Al Sajaa",
        "Warehouses Lands"
      ]
    },
    {
      category: "Residential & Suburbs",
      areas: [
        "Al Gharayen National Park",
        "Aturrah",
        "Hamriya East",
        "Hamriya West",
        "Al Bedea Suburb Hoshi",
        "Al Sajaa Near Ali Musa"
      ]
    },
    {
      category: "Nearby Emirates",
      areas: [
        "Umm Al Quwain",
        "Dubai Areas (on request)"
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide pickup truck rental services across Sharjah and surrounding areas. Fast delivery and pickup at your location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {areaCategories.map((cat, catIndex) => (
            <div key={catIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-800">{cat.category}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors group cursor-pointer"
                  >
                    <FaMapMarkerAlt className="text-gray-400 mr-3 group-hover:text-yellow-500 transition-colors" size={16} />
                    <span className="text-gray-700 font-medium group-hover:text-gray-900">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceAreas;

import React from "react";
import { FaTruck, FaShippingFast, FaCouch, FaTools, FaIndustry, FaTrailer } from "react-icons/fa";

function TruckOptions() {
  const trucks = [
    { name: "1 Ton Pickup", description: "Perfect for light goods, quick deliveries, and small moving services.", icon: FaTruck, color: "text-blue-500" },
    { name: "3 Ton Pickup", description: "Best for furniture, medium cargo, and reliable deliveries.", icon: FaCouch, color: "text-green-500" },
    { name: "5 Ton Pickup", description: "Ideal for heavy goods, construction materials, and large deliveries.", icon: FaTools, color: "text-orange-500" },
    
    { name: "10 Ton Pickup", description: "Powerful trucks for machinery, heavy cargo, and commercial transportation.", icon: FaIndustry, color: "text-red-500" },
    { name: "40 Feet Trailer", description: "Spacious trailers for oversized shipments and container transport.", icon: FaTrailer, color: "text-teal-500" },
    { name: "50 Feet Trailer", description: "Best for large cargo, factory machinery, and container transportation.", icon: FaTrailer, color: "text-indigo-500" },
  ];

  return (
    <div className="py-20 px-4 bg-linear-to-br from-white to-gray-50" id="options">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Truck Rental Options
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect vehicle for your transportation needs. All trucks are well-maintained and driven by experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trucks.map((truck, index) => {
            const IconComponent = truck.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-linear-to-br from-yellow-400 to-yellow-500 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-yellow-600 transition-colors">
                  {truck.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{truck.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TruckOptions;

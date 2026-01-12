import React from "react";
import { FaMapMarkedAlt, FaDollarSign, FaShieldAlt, FaClock, FaStar, FaUsers } from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    { title: "Local Expertise", description: "Deep knowledge of Sharjah areas for efficient, fast service delivery.", icon: FaMapMarkedAlt, color: "text-blue-500" },
    { title: "Affordable Rates", description: "Competitive pricing with transparent quotes and no hidden fees.", icon: FaDollarSign, color: "text-green-500" },
    { title: "Safe & Secure", description: "Professional drivers and well-maintained vehicles for your peace of mind.", icon: FaShieldAlt, color: "text-red-500" },
    { title: "24/7 Support", description: "Round-the-clock customer service for all your rental needs.", icon: FaClock, color: "text-purple-500" },
    { title: "Top Reviews", description: "Consistently rated 5-star by satisfied customers across the region.", icon: FaStar, color: "text-yellow-500" },
    { title: "Experienced Team", description: "Trained professionals committed to excellence in every service.", icon: FaUsers, color: "text-indigo-500" },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Why Choose DriveEase?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for pickup truck rentals in Sharjah and Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2 group">
                <div className="flex items-center justify-center mb-6">
                  <div className={`bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-yellow-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

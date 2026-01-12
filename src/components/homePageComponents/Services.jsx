"use client";
import React from "react";
import { FaShieldAlt, FaClock, FaTruck, FaRoute } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Goods Insurance",
      desc: "Your cargo's safety is our priority. We provide comprehensive insurance coverage for every shipment to ensure peace of mind.",
    },
    {
      icon: <FaClock />,
      title: "Real-time Tracking",
      desc: "Stay updated with advanced GPS tracking. Monitor your shipment's progress and receive accurate ETAs at every step.",
    },
    {
      icon: <FaTruck />,
      title: "Versatile Fleet",
      desc: "From small pickups to heavy-duty trailers, our diverse fleet is equipped to handle any cargo size or weight requirement.",
    },
    {
      icon: <FaRoute />,
      title: "Expert Logistics",
      desc: "Our professional drivers and logistics experts ensure optimized routing for faster, more efficient delivery across the country.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our <span className="text-yellow-400">Logistics Solutions</span>
          </h2>
          <p className="text-slate-600 mt-4">
            We provide world-class trucking and transport services focused on
            reliability, safety, and on-time delivery for all your business and
            personal needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-4xl text-yellow-400 mb-6 bg-yellow-50 w-16 h-16 flex items-center justify-center rounded-xl transition-all group-hover:bg-yellow-400 group-hover:text-white">
                {f.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                {f.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Reliable & Road-Ready Fleet",
      desc: "Our trucks are aggressively maintained and always prepared for heavy-duty logistics. No breakdowns. No excuses.",
      icon: "🚚",
    },
    {
      title: "On-Time or It’s On Us",
      desc: "Deadlines matter. We operate with strict delivery discipline to keep your business moving without delays.",
      icon: "⏱",
    },
    {
      title: "Elite Professional Drivers",
      desc: "Certified, experienced, and disciplined drivers who treat your cargo like their own responsibility.",
      icon: "💼",
    },
    {
      title: "No Hidden Charges. Ever.",
      desc: "Straight-forward pricing with zero surprises. What you see is what you pay.",
      icon: "💰",
    },
    {
      title: "Flexible Logistics Power",
      desc: "From small moves to large-scale cargo, we customize solutions that fit your exact needs.",
      icon: "🌍",
    },
    {
      title: "Customer First. Always.",
      desc: "Support that actually supports you. Fast response, clear communication, real solutions.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-[#1D293D] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#FFDF20] text-sm uppercase tracking-widest font-semibold mb-3">
            Why Choose Us
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            Built for Power, <br className="hidden md:block" /> Driven by Reliability
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            We don’t just rent trucks — we dominate logistics with precision, safety, and ruthless efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-[#24324A] border border-[#FFDF20]/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,223,32,0.25)]"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


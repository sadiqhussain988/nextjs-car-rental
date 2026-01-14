"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I track my shipment in real-time?",
    answer:
      "Once your booking is confirmed, you will receive a tracking ID via SMS/WhatsApp. You can enter this ID on our tracking page to see the live location of your truck.",
  },
  {
    question: "What types of trucks are available for booking?",
    answer:
      "We offer a wide range of vehicles including Mazda, 6-wheelers, 10-wheelers, and containers of various sizes (20ft, 40ft) to suit your specific cargo needs.",
  },
  {
    question: "Do you provide insurance for valuable goods?",
    answer:
      "Yes, we offer optional goods-in-transit insurance for high-value cargo to ensure maximum peace of mind during transportation.",
  },
  {
    question: "How is the pricing calculated for out-station trips?",
    answer:
      "Pricing is based on the distance (KM), truck type, and weight of the load. We guarantee transparent pricing with no hidden charges.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="text-slate-600">
            Quick answers to common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all ${
                openIndex === index ? "bg-white shadow-lg" : "bg-white/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left group cursor-pointer"
              >
                <span
                  className={`font-bold text-lg  ${
                    openIndex === index
                      ? "text-yellow-500"
                      : "text-slate-900 group-hover:text-yellow-400 transition duration-400"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-yellow-500" />
                ) : (
                  <Plus className="text-slate-400 group-hover:text-yellow-400 transition duration-400" />
                )}
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "pb-6 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

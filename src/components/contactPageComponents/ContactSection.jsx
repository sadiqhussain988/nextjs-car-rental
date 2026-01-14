import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    // Section par overflow-hidden lagaya taake koi horizontal scroll na bane
    <section className="py-12 md:pt-20 md:pb-14 bg-white overflow-hidden w-full">
      {/* 1. max-w-7xl ko mx-auto ke sath center kiya.
         2. px-4 ensure karega ke dono sides par barabar gap ho (left and right).
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Card: Let's Connect */}
          {/* w-full aur mx-auto add kiya taake mobile par card center rahe */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 md:p-14 text-white flex flex-col justify-between shadow-2xl w-full mx-auto">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's <span className="text-yellow-400">Connect</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10">
                We're here to provide the best trucking solutions for your
                business. Reach out and let's get moving.
              </p>

              <div className="space-y-6 md:space-y-8">
                {/* Information Rows */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="bg-yellow-400 p-3 md:p-4 rounded-2xl text-slate-900 text-lg md:text-xl shrink-0 transition-transform group-hover:scale-105">
                    <FaPhoneAlt />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-bold">
                      Call Us
                    </p>
                    <p className="text-lg md:text-xl font-semibold truncate">
                      +92 (300) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="bg-yellow-400 p-3 md:p-4 rounded-2xl text-slate-900 text-lg md:text-xl shrink-0 transition-transform group-hover:scale-105">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-bold">
                      Email Support
                    </p>
                    <p className="text-lg md:text-xl font-semibold truncate">
                      support@truckease.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="bg-yellow-400 p-3 md:p-4 rounded-2xl text-slate-900 text-lg md:text-xl shrink-0 transition-transform group-hover:scale-105">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="min-w-0 text-white">
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-bold">
                      Our Office
                    </p>
                    <p className="text-lg md:text-xl font-semibold leading-tight">
                      I-9 Industrial Area, Islamabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-12">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 hover:bg-yellow-400 hover:text-slate-900 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 w-full"
              >
                <FaWhatsapp className="text-xl md:text-2xl" /> Direct WhatsApp
                Chat
              </a>
            </div>
          </div>

          {/* Right Card: Form */}
          <div className="bg-white border border-gray-100 p-6 sm:p-10 md:p-14 rounded-3xl shadow-xl flex flex-col justify-center w-full mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Send a Message
            </h3>
            <form className="space-y-4 md:space-y-5">
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-400 outline-none font-medium text-slate-900 transition-all text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-400 outline-none font-medium text-slate-900 transition-all text-sm md:text-base"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-400 outline-none font-medium text-slate-900 transition-all text-sm md:text-base"
              />
              <textarea
                rows="4"
                placeholder="How can we assist you with your logistics?"
                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-400 outline-none font-medium text-slate-900 transition-all resize-none text-sm md:text-base"
              ></textarea>
              <button className="w-full cursor-pointer bg-slate-900 text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

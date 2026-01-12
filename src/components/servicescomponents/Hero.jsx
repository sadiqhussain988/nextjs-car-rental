"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoCarSportOutline } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Hero() {
  const slides = [
    {
      title: "Pickup Truck Rental",
      subtitle: "Sharjah & Dubai",
      description: "Fast, reliable, and affordable rental services. Available Monday to Saturday, 8 AM - 6 PM.",
      bgImage: "https://pickuptruckrentalsajaa.com/wp-content/uploads/2025/10/Untitled-design-_4_-min-1-e1761835498449.jpeg",
      overlay: "bg-gradient-to-br from-white-900/10 via-slate-800/80 to-slate-700/80"
    },
    {
      title: "Professional Drivers",
      subtitle: "Experienced & Licensed",
      description: "Our trained drivers ensure safe and timely delivery of your cargo across all locations.",
      bgImage: "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg",
     overlay: "bg-gradient-to-br from-white-900/10 via-slate-800/80 to-slate-700/80"
    },
    {
      title: "Wide Fleet Selection",
      subtitle: "From 1 Ton to 50 Feet Trailers",
      description: "Choose from our extensive range of vehicles to match your specific transportation needs.",
      bgImage: "https://pickuptruckrentalsajaa.com/wp-content/uploads/2025/10/Untitled-design-_31_.jpeg",
      overlay: "bg-gradient-to-br from-white-900/10 via-slate-800/80 to-slate-700/80"
    }
  ];

  return (
    <div className="relative h-[100vh] text-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.bgImage}')` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${slide.overlay}`}></div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/15 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center p-8 z-10">
                <div className="relative text-center max-w-4xl mx-auto">
                  <div className="flex justify-center mb-6">
                    <div className="bg-yellow-400 p-4 rounded-full shadow-2xl backdrop-blur-sm">
                      <IoCarSportOutline size={48} className="text-slate-900" />
                    </div>
                  </div>

                  <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-200">
                    {slide.subtitle}
                  </h2>

                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
                    <a href="#services" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-50 py-2 px-5 rounded-full text-xl font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105">
                      Book Now
                    </a>
                    <a href="mailto:pickuptruckrental@driveease.com" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                      <FaEnvelope className="text-yellow-400" />
                      <span className="text-lg font-semibold">Contact Us</span>
                    </a>
                  </div>

                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
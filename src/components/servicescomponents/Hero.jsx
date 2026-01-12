"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const serviceSlides = [
  {
    title: "Pickup Truck Rental",
    highlight: "Sharjah & Dubai",
    desc: "Fast, reliable, and affordable rental services. Available Monday to Saturday, 8 AM - 6 PM for all your transport needs.",
    image:
      "https://pickuptruckrentalsajaa.com/wp-content/uploads/2025/10/Untitled-design-_4_-min-1-e1761835498449.jpeg",
  },
  {
    title: "Professional Drivers",
    highlight: "Experienced & Licensed",
    desc: "Our trained drivers ensure safe and timely delivery of your cargo across all locations with professional handling.",
    image: "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg",
  },
  {
    title: "Wide Fleet Selection",
    highlight: "1 Ton to 50 Feet Trailers",
    desc: "Choose from our extensive range of vehicles to match your specific transportation needs, from small pickups to heavy trailers.",
    image:
      "https://pickuptruckrentalsajaa.com/wp-content/uploads/2025/10/Untitled-design-_31_.jpeg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % serviceSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % serviceSlides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slider - Horizontal Animation */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={serviceSlides[index].image}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceSlides[index].image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      {/* Left Arrow (Added as per Home UI) */}
      <div
        onClick={prevSlide}
        className="absolute hidden lg:block left-6 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer transition-all"
      >
        <ArrowLeft className="text-white" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl w-full px-6 flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }} // Bottom to Top Entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }} // Top Exit
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {serviceSlides[index].title}
              <span className="block text-yellow-400">
                {serviceSlides[index].highlight}
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              {serviceSlides[index].desc}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <button className="rounded-2xl px-8 py-3 text-base font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition shadow-lg active:scale-95">
                Book Now
              </button>

              <button className="rounded-2xl px-8 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10 transition active:scale-95">
                Contact Us
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow (Added as per Home UI) */}
      <div
        onClick={nextSlide}
        className="absolute hidden lg:block right-6 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer transition-all"
      >
        <ArrowRight className="text-white" />
      </div>
    </section>
  );
}

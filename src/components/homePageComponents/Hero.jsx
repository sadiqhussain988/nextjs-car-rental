"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Reliable Truck Booking",
    highlight: "For Heavy Hauling",
    desc: "Easily transport your valuable goods and heavy cargo. Professional drivers and secure transport are now just a click away.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Smart Logistics Solutions",
    highlight: "Home & Office Shifting",
    desc: "Whether you're moving your home or office equipment, our modern fleet and expert team are ready to assist you anytime.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Fast & Secure Delivery",
    highlight: "Anywhere in Pakistan",
    desc: "A wide range of truck sizes is available. Ship your goods nationwide with transparent pricing and real-time live tracking.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2tzfGVufDB8fDB8fHww",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slider */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slides[index].image}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="absolute hidden lg:block left-2 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer"
      >
        <ArrowLeft className="text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {slides[index].title}
              <span className="block text-yellow-400">
                {slides[index].highlight}
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              {slides[index].desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <button className="rounded-2xl px-8 py-3 text-base font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition">
                Book a Truck
              </button>

              <button className="rounded-2xl px-8 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10 transition">
                View Our Trucks
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="absolute hidden lg:block right-2 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer"
      >
        <ArrowRight className="text-white" />
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const contactSlides = [
  {
    title: "Get in Touch",
    highlight: "With Our Logistics Team",
    desc: "Have questions about our freight services or need a customized quote? Our team is available 24/7 to assist you.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Nationwide Support",
    highlight: "Wherever You Are",
    desc: "From Karachi to Peshawar, we ensure smooth communication and reliable truck tracking for every shipment.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function ContactHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contactSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setIndex(
      (prev) => (prev - 1 + contactSlides.length) % contactSlides.length
    );
  const nextSlide = () => setIndex((prev) => (prev + 1) % contactSlides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={contactSlides[index].image}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${contactSlides[index].image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />

      <div
        onClick={prevSlide}
        className="absolute hidden lg:block left-4 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer"
      >
        <ArrowLeft className="text-white" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 text-center">
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
              {contactSlides[index].title}
              <span className="block text-yellow-400">
                {contactSlides[index].highlight}
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              {contactSlides[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        onClick={nextSlide}
        className="absolute hidden lg:block right-4 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer"
      >
        <ArrowRight className="text-white" />
      </div>
    </section>
  );
}

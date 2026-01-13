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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={serviceSlides[index].image}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceSlides[index].image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          {serviceSlides[index].title}
          <span className="block text-yellow-400">
            {serviceSlides[index].highlight}
          </span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-white/80">
          {serviceSlides[index].desc}
        </p>
      </div>
    </section>
  );
}

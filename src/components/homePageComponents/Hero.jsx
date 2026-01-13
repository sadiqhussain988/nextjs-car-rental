"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import img1 from "../../images/1.jpeg";
import img2 from "../../images/2.jpeg";
import img3 from "../../images/3.jpeg";

const slides = [
  {
    title: "Reliable Truck Booking",
    highlight: "For Heavy Hauling",
    desc: "Easily transport your valuable goods and heavy cargo. Professional drivers and secure transport are now just a click away.",
    image: img1,
  },
  {
    title: "Smart Logistics Solutions",
    highlight: "Home & Office Shifting",
    desc: "Whether you're moving your home or office equipment, our modern fleet and expert team are ready to assist you anytime.",
    image: img2,
  },
  {
    title: "Fast & Secure Delivery",
    highlight: "Anywhere in Pakistan",
    desc: "A wide range of truck sizes is available. Ship your goods nationwide with transparent pricing and real-time live tracking.",
    image: img3,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleManualNavigation = (newDirection, newIndex) => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);

    setDirection(newDirection);
    setIndex(newIndex);

    timeoutRef.current = setTimeout(startAutoSlide, 5000);
  };

  const prevSlide = () =>
    handleManualNavigation(-1, (index - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    handleManualNavigation(1, (index + 1) % slides.length);

  const slideVariants = {
    incoming: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    active: { x: 0 },
    outgoing: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="incoming"
          animate="active"
          exit="outgoing"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image.src})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          {slides[index].title}
          <span className="block text-yellow-400">
            {slides[index].highlight}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-white/80">{slides[index].desc}</p>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 z-20">
        <ArrowLeft className="text-white" />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 z-20">
        <ArrowRight className="text-white" />
      </button>
    </section>
  );
}

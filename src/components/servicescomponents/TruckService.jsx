"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import image0 from "../../images/0.webp";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpeg";
import image6 from "../../images/6.jpeg";
import image7 from "../../images/7.jpeg";
import image8 from "../../images/8.jpeg";

const truckServices = [
  {
    id: "1-ton",
    title: "1 Ton Pickup Truck Rental Sajaa, Sharjah",
    description:
      "Perfect for light goods, quick deliveries, and small moving services within Sharjah city and nearby areas.",
    href: "/1-ton-pickup-truck-rental-sajaa-sharjah",
    imageSrc: image0,
    imageAlt: "1 Ton Pickup Truck Rental Sajaa",
  },
  {
    id: "3-ton",
    title: "3 Ton Pickup Truck Rental Sajaa, Sharjah",
    description:
      "Best for furniture, medium cargo, and reliable deliveries across Sharjah.",
    href: "/3-ton-pickup-truck-rental-sajaa-sharjah",
    imageSrc: image1,
    imageAlt: "3 ton pickup Truck Rental Sajaa",
  },
  {
    id: "5-ton",
    title: "5 Ton Pickup Truck Rental Sajaa, Sharjah",
    description:
      "Ideal for heavy goods, construction materials, and large deliveries.",
    href: "/5-ton-pickup-truck-rental-sajaa-sharjah",
    imageSrc: image2,
    imageAlt: "5 Ton Pickup Truck Rental Sajaa",
  },
  {
    id: "7-ton",
    title: "7 Ton Pickup Truck Rental Sajaa, Sharjah",
    description: "Reliable for bulky shipments across UAE regions.",
    href: "#",
    imageSrc: image3,
    imageAlt: "7 Ton Pickup Truck",
  },
  {
    id: "10-ton",
    title: "10 Ton Pickup Truck Rental Sajaa, Sharjah",
    description: "Powerful trucks for heavy cargo.",
    href: "/10-ton-pickup-truck-rental-sajaa-sharjah",
    imageSrc: image4,
    imageAlt: "10 Ton Pickup Truck",
  },
  {
    id: "40-feet-trailer",
    title: "40 Feet Trailer in Sajaa, Sharjah",
    description: "Spacious trailers for oversized shipments.",
    href: "/40-feet-trailer-in-sajaa-sharjah",
    imageSrc: image5,
    imageAlt: "40 feet trailer",
  },
  {
    id: "50-feet-trailer",
    title: "50 Feet Trailer in Sajaa, Sharjah",
    description: "Best for factory machinery and containers.",
    href: "/50-feet-trailer-in-sajaa-sharjah",
    imageSrc: image6,
    imageAlt: "50 feet trailer",
  },
  {
    id: "same-day",
    title: "Same-Day Pickup in Sajaa, Sharjah",
    description: "Fast and reliable same-day pickup service.",
    href: "/same-day-pickup-truck-rentals-in-sajaa-sharjah",
    imageSrc: image7,
    imageAlt: "Same day pickup",
  },
  {
    id: "furniture-delivery",
    title: "Furniture Delivery in Sajaa, Sharjah",
    description: "Safe and affordable furniture delivery.",
    href: "/furniture-delivery-pickup-truck-in-sajaa-sharjah",
    imageSrc: image8,
    imageAlt: "Furniture delivery",
  },
];

const TruckServiceCard = ({ service }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition">
    {/* ✅ FIXED IMAGE WRAPPER */}
    <div className="relative h-64 w-full overflow-hidden">
      <Link href={service.href} className="block w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  </div>
);

export default function TruckService() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {truckServices.map((service) => (
          <TruckServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

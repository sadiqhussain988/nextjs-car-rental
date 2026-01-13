"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import image0 from "../../images/0.webp"
import image1 from "../../images/1.jpeg"
import image2 from "../../images/2.jpeg"
import image3 from "../../images/3.jpeg" 
import image4 from "../../images/4.jpeg"
import image5 from "../../images/5.jpeg"
import image6 from "../../images/6.jpeg"
import image7 from "../../images/7.jpeg"
import image8 from "../../images/8.jpeg"
const truckServices = [
  {
    id: '1-ton',
    title: '1 Ton Pickup Truck Rental Sajaa, Sharjah',
    description: 'Perfect for light goods, quick deliveries, and small moving services within Sharjah city and nearby areas.',
    href: '/1-ton-pickup-truck-rental-sajaa-sharjah',
    imageSrc: image0,
    imageAlt: '1 Ton Pickup Truck Rental Sajaa',
    imageWidth: 426,
    imageHeight: 320
  },
  {
    id: '3-ton',
    title: '3 Ton Pickup Truck Rental Sajaa, Sharjah',
    description: 'Best for furniture, medium cargo, and reliable deliveries across Sharjah with safe, trusted, and timely service.',
    href: '/3-ton-pickup-truck-rental-sajaa-sharjah',
    imageSrc: image1,
    imageAlt: '3 ton pickup Truck Rental Sajaa',
    imageWidth: 1032,
    imageHeight: 774
  },
  {
    id: '5-ton',
    title: '5 Ton Pickup Truck Rental Sajaa, Sharjah',
    description: 'Ideal for heavy goods, construction materials, and large deliveries across Sharjah with professional drivers.',
    href: '/5-ton-pickup-truck-rental-sajaa-sharjah',
    imageSrc: image2,
    imageAlt: '5 Ton Pickup Truck Rental Sajaa, Sharjah',
    imageWidth: 1600,
    imageHeight: 1200
  },
  {
    id: '7-ton',
    title: '7 Ton Pickup Truck Rental Sajaa, Sharjah',
    description: 'Reliable for bulky shipments and long distance moves across Sharjah and surrounding UAE regions.',
    href:"#",
    imageSrc: image3,
    imageAlt: 'Pickup Truck Rental Al Sajaa Near Ali Musa',
    imageWidth: 1600,
    imageHeight: 1200
  },
  {
    id: '10-ton',
    title: '10 Ton Pickup Truck Rental Sajaa, Sharjah',
    description: 'Powerful trucks for machinery, heavy cargo, and commercial transportation needs across Sharjah.',
    href: '/10-ton-pickup-truck-rental-sajaa-sharjah',
    imageSrc: image4,
    imageAlt: '10 Ton Pickup Truck Rental Sajaa, Sharjah',
    imageWidth: 1600,
    imageHeight: 1200
  },
  {
    id: '40-feet-trailer',
    title: '40 Feet Trailer in Sajaa, Sharjah',
    description: 'Spacious trailers for oversized shipments, container transport, and heavy cargo delivery across Sharjah and nearby locations.',
    href: '/40-feet-trailer-in-sajaa-sharjah',
    imageSrc: image5,
    imageAlt: '40 feet trailer for rent in sharjah',
    imageWidth: 1600,
    imageHeight: 1200
  },
  {
    id: '50-feet-trailer',
    title: '50 Feet Trailer in Sajaa, Sharjah',
    description: 'Best for large cargo, factory machinery, and container transportation across Sharjah, Dubai, and other Emirates.',
    href: '/50-feet-trailer-in-sajaa-sharjah',
    imageSrc: image6,
    imageAlt: '50 feet trailer for rent in saja sharjah',
    imageWidth: 1600,
    imageHeight: 1200
  },
  {
    id: 'same-day',
    title: 'Same-Day Pickup in Sajaa, Sharjah',
    description: 'Fast and reliable same-day pickup truck rentals in Sajaa, Sharjah for homes, offices, and businesses.',
    href: '/same-day-pickup-truck-rentals-in-sajaa-sharjah',
    imageSrc: image7,
    imageAlt: 'Same-Day Pickup in Sajaa, Sharjah',
    imageWidth: 1600,
    imageHeight: 1140
  },
  {
    id: 'furniture-delivery',
    title: 'Furniture Delivery in Sajaa, Sharjah',
    description: 'Affordable and secure furniture delivery pickup truck in Sajaa, Sharjah — safe transport for homes and offices.',
    href: '/furniture-delivery-pickup-truck-in-sajaa-sharjah',
    imageSrc: image8,
    imageAlt: 'Furniture Delivery in Sajaa, Sharjah',
    imageWidth: 1600,
    imageHeight: 1200
  }
];

// Service Card Component (Each service displayed in a card)
const TruckServiceCard = ({ service, onLearnMore }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2">
    <div className="relative h-64 w-full overflow-hidden">
      <Link href={service.href}>
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
        <Link
          href={service.href}
          className="hover:text-yellow-600 transition-colors duration-200"
        >
          {service.title}
        </Link>
      </h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
      <button
        onClick={() => onLearnMore(service)}
        className="inline-flex items-center mt-4 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-1 transform duration-200 cursor-pointer"
      >
        Learn More →
      </button>
    </div>
  </div>
);

// Main Component for Truck Services
export default function TruckService() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-20" id="services">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Our Truck Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional pickup truck rental services in Sharjah and surrounding areas. Choose from our wide range of well maintained vehicles.
            </p>
          </div>

          {/* Truck Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {truckServices.map((service) => (
              <TruckServiceCard key={service.id} service={service} onLearnMore={handleLearnMore} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="mb-6">
                <Image
                  src={selectedService.imageSrc}
                  alt={selectedService.imageAlt}
                  className="w-full h-64 object-cover rounded-lg"
                  placeholder="blur"
                />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedService.description}</p>
              <div className="flex gap-4">
                <Link
                  href={selectedService.href}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                  onClick={closeModal}
                >
                  Book Now
                </Link>
                <button
                  onClick={closeModal}
                  className="border border-gray-300 cursor-pointer text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function FeaturedTrucks() {
  const trucks = [
    {
      id: 1,
      name: "Mini Cargo Truck",
      price: "$50/trip",
      img: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1Y2tzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Heavy Duty Hauler",
      price: "$120/trip",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Flatbed Transport",
      price: "$90/trip",
      img: "https://media.istockphoto.com/id/1372188715/photo/delivery-truck-in-a-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=znWxTMpJsi1f7bw7Xip_vYBa1CAHiLOH6db3p-sH1qE=",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Featured Fleet
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Choose from our wide range of trucks for safe, reliable, and fast
            delivery of your goods.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks.map((truck) => (
            <div
              key={truck.id}
              className="border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={truck.img}
                  alt={truck.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Truck Info */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {truck.name}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <span className="text-yellow-500 font-bold text-lg">
                  {truck.price}
                </span>
                <button className="px-5 py-2 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

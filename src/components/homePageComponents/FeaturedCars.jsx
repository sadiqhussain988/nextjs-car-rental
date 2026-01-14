import truck1 from "../../images/1.jpeg";
import truck2 from "../../images/2.jpeg";
import truck3 from "../../images/3.jpeg";

export default function FeaturedTrucks() {
  const trucks = [
    {
      id: 1,
      name: "Mini Cargo Truck",
      price: "$50/trip",
      img: truck1,
    },
    {
      id: 2,
      name: "Heavy Duty Hauler",
      price: "$120/trip",
      img: truck2,
    },
    {
      id: 3,
      name: "Flatbed Transport",
      price: "$90/trip",
      img: truck3,
    },
  ];

  return (
    <section className="pt-20 bg-white">
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
              className="border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group hover:border-yellow-400"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={truck.img.src}
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
                <button className="px-5 py-2 rounded-lg cursor-pointer text-sm font-semibold bg-slate-900 text-white hover:bg-yellow-400 hover:scale-105 transition duration-400">
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

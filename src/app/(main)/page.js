import Hero from "@/components/homePageComponents/Hero";
import FeaturedCars from "@/components/homePageComponents/FeaturedCars";
import Services from "@/components/homePageComponents/Services";
import Testimonials from "@/components/homePageComponents/Testimonials";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <FeaturedCars />
      <Services />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to move your goods?{" "}
            <span className="text-yellow-400">
              Book your reliable truck today!
            </span>
          </h2>
          <button className="mt-8 bg-yellow-400 text-slate-900 px-5 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl active:scale-95">
            Check Our Fleet
          </button>
        </div>
      </section>
    </div>
  );
}

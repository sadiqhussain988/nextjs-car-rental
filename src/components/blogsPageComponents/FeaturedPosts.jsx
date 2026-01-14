import React from "react";
import { FaArrowRight, FaClock } from "react-icons/fa";

const FeaturedPost = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative z-20">
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-125 border border-slate-100">
        <div className="lg:w-1/2 relative h-72 lg:h-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D"
            alt="Featured Post"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 bg-yellow-400 text-slate-900 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
            Trending News
          </div>
        </div>

        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex items-center gap-2">
              <FaClock className="text-yellow-500" /> 5 Min Read
            </span>
            <span className="text-slate-200">|</span>
            <span>January 12, 2026</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] hover:text-yellow-600 transition-colors cursor-pointer">
            How AI is Revolutionizing{" "}
            <span className="text-yellow-500">Route Planning</span>
          </h2>

          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            Discover how artificial intelligence is helping trucking companies
            save millions in fuel costs by predicting traffic patterns and
            weather conditions in real-time.
          </p>

          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="Author"
                className="w-12 h-12 rounded-full ring-4 ring-slate-50"
              />
              <div>
                <p className="font-bold text-slate-900">Zeeshan Ahmad</p>
                <p className="text-xs text-slate-400 font-medium">
                  Logistics Expert
                </p>
              </div>
            </div>

            <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400 hover:text-slate-900 transition-all group shadow-xl active:scale-95">
              Read More
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;

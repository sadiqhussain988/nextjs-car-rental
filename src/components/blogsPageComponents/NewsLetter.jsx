import React from "react";

const BlogNewsletter = () => {
  return (
    <section className="py-16 bg-slate-900 mx-4 md:mx-12 mb-12 rounded-[2.5rem] text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Stay Ahead of the <span className="text-yellow-400">Curve</span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto mb-8">
        Get the latest insights on logistics, freight trends, and trucking
        technology delivered to your inbox.
      </p>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="grow px-6 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-yellow-400"
        />
        <button className="bg-yellow-400 text-slate-900 font-bold px-5 py-3 rounded-2xl hover:bg-yellow-300 transition-all active:scale-95">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default BlogNewsletter;

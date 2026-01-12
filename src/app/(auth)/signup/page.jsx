"use client";
import React from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

export default function SignupPage() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white">
      {/* 1. flex-row-reverse hata diya aur lg:flex-row rakha taake Login ki tarah image right par ho ya alignment sahi rahe.
          2. max-w-6xl kiya hai taake space achi mile. */}
      <div className="max-w-6xl w-full bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-162.5">
        {/* Left Side: Signup Form (Exactly 50%) */}
        <div className="lg:w-1/2 w-full p-8 md:p-14 bg-slate-900 text-white flex flex-col justify-center border-r border-slate-800/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Create <span className="text-yellow-400">Account</span>
          </h2>

          <form className="space-y-5">
            {/* Input Row for Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                  Phone
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
                  <input
                    type="text"
                    placeholder="+92 300..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-white"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-white"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-white"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-yellow-400 text-slate-900 py-4.5 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg active:scale-95 mt-4"
            >
              Get Started
            </button>

            <p className="text-center text-slate-400 text-sm mt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-yellow-400 font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side: Side Image (Exactly 50%) */}
        <div className="lg:w-1/2 relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Truck"
          />
          {/* Gradient Overlay for professional look */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="text-4xl font-bold text-yellow-400">Join Us</h2>
            <p className="text-slate-300 mt-2 text-lg">
              Become a partner or a customer and start moving your goods today
              with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

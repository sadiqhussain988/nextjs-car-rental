"use client";
import React from "react";
import Link from "next/link";
import { FaLock, FaEnvelope } from "react-icons/fa";

export default function LoginPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side: Branding/Image */}
        <div className="lg:w-1/2 relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1Y2tzfGVufDB8fDB8fHww"
            alt="Trucking"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 text-white">
            <h2 className="text-4xl font-bold">
              Welcome <span className="text-yellow-400">Back!</span>
            </h2>
            <p className="text-slate-300 mt-2">
              Log in to manage your shipments and track your fleet in real-time.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 w-full p-8 md:p-16 flex flex-col justify-center bg-slate-900 text-white">
          <div className="mb-10 lg:hidden text-center">
            <h2 className="text-3xl font-bold">
              Log <span className="text-yellow-400">In</span>
            </h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest px-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-yellow-400 hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all text-white"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg active:scale-95 mt-4"
            >
              Sign In
            </button>

            <p className="text-center text-slate-400 text-sm mt-6">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-yellow-400 font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
